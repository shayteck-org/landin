import { editMode } from "@/types/model";
import styles from "@/styles/editModal.module.scss";
import {
  Button,
  Col,
  ColorPicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
} from "antd";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";

const EditSectionModal: React.FC<editMode> = ({
  edit,
  setEdit,
  setMode,
  mode,
  defaultValues,
}) => {
  const [modal, toggle] = useState<boolean>(false);
  const [form] = useForm();

  useEffect(() => {
    toggle(mode === "edit" ? true : false);
  }, [mode]);

  function stateHandler(status: "cancel" | "confirm" | "submit") {
    switch (status) {
      case "submit": {
        setEdit(form.getFieldValue("mainValue"));
        return setMode("stable");
      }
      case "cancel": {
        return setMode("stable");
      }
      case "confirm": {
        setEdit(form.getFieldValue("mainValue"));
        return setMode("stable");
      }
      default:
        return;
    }
  }
  console.log(edit);

  return (
    <Modal
      title={"تغییر اطلاعات"}
      open={modal}
      onCancel={() => stateHandler("cancel")}
      onOk={() => stateHandler("confirm")}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <Row>
        <Form
          form={form}
          initialValues={{ title: edit?.title }}
          name="sectionEditor"
          onFinish={() => stateHandler("submit")}
          requiredMark
          autoComplete="off"
          className={styles.editor}
          style={{ width: "100%", paddingTop: 12 }}
        >
          <Form.Item label={"عنوان"} name={"title"} wrapperCol={{ span: 24 }}>
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Form.Item
            label={"توضیحات"}
            name={"description"}
            wrapperCol={{ span: 24 }}
          >
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label={"رنگ متن را انتخاب کنید."}
                name={"color"}
                wrapperCol={{ span: 24 }}
              >
                <ColorPicker defaultValue={"#000"} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={"رنگ پس زمینه را انتخاب کنید."}
                name={"bgColor"}
                wrapperCol={{ span: 24 }}
              >
                <ColorPicker defaultValue={"#fff"} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            rules={[{ required: true, message: "فونت اجباری میباشد" }]}
            label={"فونت مورد نظر خود را انتخاب کنید"}
          >
            <Select
              defaultValue={"15141418"}
              options={[
                { value: "15147418", label: "ب نازنین" },
                { value: "15148418", label: "ب یکان" },
                { value: "15141418", label: "وزیرمتن" },
                { value: "15143418", label: "ایران سنس" },
              ]}
            ></Select>
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

export default EditSectionModal;
