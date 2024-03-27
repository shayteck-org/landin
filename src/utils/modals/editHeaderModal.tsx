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

let freeNestedModalData = { image: { data: { image_url: "" } } };

const EditSectionModal: React.FC<editMode> = ({
  edit,
  setEdit,
  setMode,
  mode,
  defaultValues,
}) => {
  const [modal, toggle] = useState<boolean>(false);
  const [nestedModal, toggleNestedModal] = useState<{
    modal: boolean;
    id: string;
    data: any;
  }>({
    data: freeNestedModalData,
    modal: false,
    id: "-1",
  });

  const [allChildren, setAllChildren] = useState<any[]>(edit?.links || []);
  const [form] = useForm();
  const [nestedForm] = useForm();

  const editSectionObject = useObjectMaker(form);
  const createSectionObject = useObjectMaker(nestedForm);

  useEffect(() => {
    toggle(mode === "edit" ? true : false);
  }, [mode]);

  function stateHandler(status: "cancel" | "submit") {
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
          links: allChildren,
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

  const updateLinkTitle = async (values: any) => {
    if (nestedModal.id !== "0") {
      const childIndex = allChildren.findIndex(
        (child) => child.data.id === nestedModal.id
      );
      if (childIndex !== -1) {
        const updatedChild = {
          ...allChildren[childIndex],
          data: {
            id: nestedModal.id,
            value: createSectionObject({ key: "title", type: "typography" })
              ?.data.value,
          },
        };

        setAllChildren((prevChildren) => {
          const updatedChildren = [...prevChildren];
          updatedChildren[childIndex] = updatedChild;
          return updatedChildren;
        });
      }
    }
    nestedForm.resetFields();
    toggleNestedModal({ id: "-1", modal: false, data: freeNestedModalData });
  };

  useEffect(() => {
    const { id } = nestedModal;
    if (id !== "-1" && id !== "0") {
      nestedForm.setFieldValue("title", nestedModal.data.value);
    }
  }, [nestedModal.id]);

  if (edit === null) return <Spin fullscreen />;
  return (
    <Modal
      title={"تغییر اطلاعات سربرگ(هدر)"}
      open={modal}
      onCancel={() => stateHandler("cancel")}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <Row>
        <Form
          form={form}
          initialValues={{
            button: edit.button.data.value,
            bgColor: edit?.button?.data.style.bgColor,
            onClickAction: edit?.button.data.onClick,
          }}
          name="sectionEditor"
          onFinish={() => stateHandler("submit")}
          requiredMark
          autoComplete="off"
          className={styles.editor}
          style={{ width: "100%", paddingTop: 12 }}
        >
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

          <Form.Item>
            <Collapse
              defaultActiveKey={["1"]}
              expandIconPosition="end"
              items={[
                {
                  key: "1",
                  label: "لینک ها",
                  children: (
                    <>
                      {allChildren?.map(
                        (itemm: { data: { id: string; value: string } }) => (
                          <Tooltip
                            color="red"
                            title={`برای ویرایش نام "${itemm.data.value}" کلیک کنید`}
                          >
                            <p
                              style={{
                                width: "fit-content",
                                cursor: "pointer",
                              }}
                              key={itemm.data.id}
                              onClick={() => {
                                toggleNestedModal({
                                  data: itemm.data,
                                  id: itemm.data.id,
                                  modal: true,
                                });
                              }}
                            >
                              <span style={{ color: "var(--red-title)" }}>
                                •
                              </span>
                              &nbsp; {itemm.data.value as string}
                            </p>
                          </Tooltip>
                        )
                      )}
                    </>
                  ),
                },
              ]}
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
      <Modal
        title={nestedModal.id === "0" ? "افزودن مورد جدید" : "ویرایش سرویس"}
        open={nestedModal.modal}
        onCancel={() => {
          nestedForm.resetFields();
          toggleNestedModal({
            data: freeNestedModalData,
            id: "-1",
            modal: false,
          });
        }}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { width: "100%" } }}
        cancelText={"لغو"}
      >
        <Form
          form={nestedForm}
          initialValues={{
            title: nestedModal?.data?.value,
          }}
          name="linkEditor"
          onFinish={updateLinkTitle}
          requiredMark
          className={styles.editor}
          style={{ width: "100%", paddingTop: 12 }}
        >
          <Form.Item
            label={"عنوان لینک"}
            name={"title"}
            wrapperCol={{ span: 24 }}
          >
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Button
            htmlType="submit"
            size="middle"
            type="primary"
            style={{ width: "100%" }}
          >
            {nestedModal.id !== "0" ? "اعمال تغییرات" : "افزودن"}
          </Button>
        </Form>
      </Modal>
    </Modal>
  );
};

export default EditSectionModal;
