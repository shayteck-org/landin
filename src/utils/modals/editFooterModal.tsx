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
import UploadPhoto from "@/common/upload";
import useObjectMaker from "@/hooks/useObjectMaker";
import { PresetColors } from "antd/es/theme/internal";

const EditFooterModal: React.FC<editMode> = ({
  edit,
  setEdit,
  setMode,
  mode,
}) => {
  const [modal, toggle] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [form] = useForm();

  const editSectionObject = useObjectMaker(form, edit);

  useEffect(() => {
    toggle(mode === "edit" ? true : false);
    setImageUrl(edit?.image.data.image_url);
  }, [mode]);

  function stateHandler(status: "cancel" | "submit") {
    switch (status) {
      case "submit": {
        setEdit({
          ...edit,
          sogen: editSectionObject({ key: "sogen", type: "typography" }),
          owner: editSectionObject({
            key: "owner",
            type: "typography",
          }),
          ownerPosition: editSectionObject({
            key: "ownerPosition",
            type: "typography",
          }),
          from: editSectionObject({ key: "from", type: "typography" }),
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
      title={"تغییر اطلاعات فوتر(پابرگ)"}
      open={modal}
      onCancel={() => stateHandler("cancel")}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <Row>
        <Form
          form={form}
          initialValues={{
            from: edit?.from.data?.value,
            sogen: edit?.sogen.data?.value,
            owner: edit?.owner.data.value,
            ownerPosition: edit?.ownerPosition.data.value,
          }}
          name="sectionEditor"
          onFinish={() => stateHandler("submit")}
          requiredMark
          autoComplete="off"
          layout="vertical"
          className={styles.editor}
          style={{ width: "100%", paddingTop: 12 }}
        >
          <Form.Item
            label={"از سِمَت :"}
            name={"from"}
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>
          <Form.Item
            label={"شعار :"}
            name={"sogen"}
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: "" }]}
          >
            <Input.TextArea
              showCount
              maxLength={180}
              rows={4}
              placeholder="مقدار جدید را وارد کنید"
            />
          </Form.Item>

          <Form.Item
            label={"نام نویسنده"}
            name={"owner"}
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Form.Item
            label={"سمت نویسنده"}
            name={"ownerPosition"}
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="مقدار جدید را وارد کنید" />
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

export default EditFooterModal;
