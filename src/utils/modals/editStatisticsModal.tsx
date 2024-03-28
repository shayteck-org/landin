import { editMode } from "@/types/model";
import styles from "@/styles/editModal.module.scss";
import { Button, Col, Form, Input, Modal, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import UploadPhoto from "@/common/upload";
import useObjectMaker from "@/hooks/useObjectMaker";

const EditStaticsticsModal: React.FC<editMode> = ({
  edit,
  setEdit,
  setMode,
  mode,
}) => {
  const [modal, toggle] = useState<boolean>(false);
  const [imageUrlOne, setImageUrlOne] = useState<string>("");
  const [imageUrlTwo, setImageUrlTwo] = useState<string>("");
  const [imageUrlThree, setImageUrlThree] = useState<string>("");
  const [form] = useForm();

  const editSectionObject = useObjectMaker(form, edit);

  useEffect(() => {
    toggle(mode === "edit" ? true : false);
  }, [mode]);

  function stateHandler(status: "cancel" | "submit") {
    switch (status) {
      case "submit": {
        setEdit({
          ...edit,
          firstTitle: editSectionObject({
            key: "firstTitle",
            type: "typography",
          }),
          secondTitle: editSectionObject({
            key: "secondTitle",
            type: "typography",
          }),
          thirdTitle: editSectionObject({
            key: "thirdTitle",
            type: "typography",
          }),
          aveScore: editSectionObject({
            key: "aveScore",
            type: "typography",
          }),
          satisfing: editSectionObject({
            key: "satisfing",
            type: "typography",
          }),
          customerAmout: editSectionObject({
            key: "customerAmout",
            type: "typography",
          }),
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
      title={"تغییر اطلاعات آماری"}
      open={modal}
      onCancel={() => stateHandler("cancel")}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <Row>
        <Form
          form={form}
          initialValues={{
            firstTitle: edit?.firstTitle.data?.value,
            secondTitle: edit?.secondTitle.data?.value,
            thirdTitle: edit?.thirdTitle.data?.value,
            aveScore: edit?.aveScore.data?.value,
            satisfing: edit?.satisfing.data?.value,
            customerAmout: edit?.customerAmout.data?.value,
          }}
          name="sectionEditor"
          onFinish={() => stateHandler("submit")}
          requiredMark
          autoComplete="off"
          layout="vertical"
          className={styles.editor}
          style={{ width: "100%", paddingTop: 12 }}
        >
          <Row gutter={[8, 10]}>
            <Col xs={24} md={12}>
              <Form.Item
                label={"تایتل اول"}
                name={"firstTitle"}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder="مقدار جدید را وارد کنید" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label={"مقدار تایتل اول"}
                name={"aveScore"}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder="مقدار جدید را وارد کنید" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[8, 10]}>
            <Col xs={24} md={12}>
              <Form.Item
                label={"تایتل دوم"}
                name={"secondTitle"}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder="مقدار جدید را وارد کنید" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label={"مقدار تایتل دوم"}
                name={"satisfing"}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder="مقدار جدید را وارد کنید" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[8, 10]}>
            <Col xs={24} md={12}>
              <Form.Item
                label={"تایتل سوم"}
                name={"thirdTitle"}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder="مقدار جدید را وارد کنید" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label={"مقدار تایتل سوم"}
                name={"customerAmout"}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder="مقدار جدید را وارد کنید" />
              </Form.Item>
            </Col>
          </Row>

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

export default EditStaticsticsModal;
