import { editMode } from "@/types/model";
import styles from "@/styles/editModal.module.scss";
import {
  Button,
  Col,
  Collapse,
  ColorPicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Spin,
  Tooltip,
  Upload,
} from "antd";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import PreviewItemDetails from "@/common/previewItem";
import UploadPhoto from "@/common/upload";
import useObjectMaker from "@/hooks/useObjectMaker";
import { PresetColors } from "antd/es/theme/internal";
import ImagePopOver from "./ImagePopover";
import ImageLibraryByType from "@/components/Image/ImageLibrary/ImageLibraries";

const EditHeroSectionModal: React.FC<editMode> = ({
  edit,
  setEdit,
  setMode,
  mode,
}) => {
  const [modal, toggle] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [form] = useForm();
  const [nestedForm] = useForm();

  const editSectionObject = useObjectMaker(form, edit);

  useEffect(() => {
    toggle(mode === "edit" ? true : false);
    setImageUrl(edit?.image.data.image_url);
  }, [mode]);

  function stateHandler(status: "cancel" | "submit") {
    console.log(form.getFieldValue("image"));

    const bgColor =
      typeof form.getFieldValue("bgColor") === "string"
        ? form.getFieldValue("bgColor")
        : `#${form.getFieldValue("bgColor").toHex()}`;

    switch (status) {
      case "submit": {
        setEdit({
          ...edit,
          button: {
            ...edit.button,
            data: {
              ...edit.button.data,
              style: {
                ...edit.button.style,
                bgColor,
              },
              onClick: editSectionObject({
                key: "onClickAction",
                type: "button",
              })?.data.value,
              value: editSectionObject({ key: "button", type: "button" })?.data
                ?.value,
            },
          },
          title: editSectionObject({ key: "title", type: "typography" }),
          description: editSectionObject({
            key: "description",
            type: "typography",
          }),
          image: {
            data: {
              ...edit.image.data,
              image_url: imageUrl,
            },
          },
        });
        return setMode("stable");
      }
      case "cancel": {
        return setMode("stable");
      }
      default:
        return;
    }
  }

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  if (edit === null) return <Spin fullscreen />;
  return (
    <Modal
      title={"تغییر اطلاعات اصلی صفحه"}
      open={modal}
      onCancel={() => stateHandler("cancel")}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <Row>
        <Form
          form={form}
          initialValues={{
            title: edit?.title.data?.value,
            description: edit?.description.data?.value,
            button: edit.button.data.value,
            bgColor: edit?.button?.data.style.bgColor,
            onClickAction: edit?.button.data.onClick,
          }}
          name="sectionEditor"
          onFinish={() => stateHandler("submit")}
          requiredMark
          autoComplete="off"
          layout="vertical"
          className={styles.editor}
          style={{ width: "100%", paddingTop: 12 }}
        >
          <Form.Item label={"عنوان"} name={"title"} wrapperCol={{ span: 24 }}>
            <Input.TextArea
              showCount
              maxLength={80}
              rows={3}
              placeholder="مقدار جدید را وارد کنید"
            />
          </Form.Item>
          <Form.Item
            label={"توضیحات"}
            name={"description"}
            wrapperCol={{ span: 24 }}
          >
            <Input.TextArea
              showCount
              maxLength={150}
              rows={4}
              placeholder="مقدار جدید را وارد کنید"
            />
          </Form.Item>

          <Form.Item
            label={"متن دکمه"}
            name={"button"}
            wrapperCol={{ span: 24 }}
          >
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Form.Item
            label={"رنگ دکمه را انتخاب کنید."}
            name={"bgColor"}
            wrapperCol={{ span: 24 }}
          >
            <ColorPicker
              presets={[
                {
                  colors: PresetColors.map((p) => p),
                  label: "پالت پیشنهادی",
                },
              ]}
              showText
            />
          </Form.Item>

          <Form.Item
            tooltip={"پس از کلیک شدن روی دکمه چه صفحه ای نشان داده شود"}
            label={"اکشن مربوط به دکمه"}
            name={"onClickAction"}
          >
            <Select
              options={[
                {
                  label: "دیالوگ تماس با ما",
                  value: 1,
                },
                {
                  label: "دیالوگ خدمات ما",
                  value: 2,
                },
                {
                  label: "دیالوگ فلان با ما",
                  value: 3,
                },
                {
                  label: "دیالوگ بهمان با ما",
                  value: 4,
                },
              ]}
            />
          </Form.Item>

          <Form.Item
            getValueFromEvent={normFile}
            valuePropName="fileList"
            label={"آپلود"}
            name={"image"}
          >
            <UploadPhoto
              setImageUrl={setImageUrl}
              imageUrlProps={imageUrl}
              showUploadList={false}
              maxCount={1}
            />
          </Form.Item>

          <Button
            htmlType="submit"
            size="middle"
            type="primary"
            style={{ width: "100%" }}
          >
            اعمال تغییرات
          </Button>
        </Form>
      </Row>
    </Modal>
  );
};

export default EditHeroSectionModal;
