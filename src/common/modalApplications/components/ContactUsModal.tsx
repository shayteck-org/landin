import { Alert, Button, Col, Form, Input, Modal, Row } from "antd";
import styles from "../index.module.scss";
import { useForm } from "antd/es/form/Form";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const ContactUsModal = (props: {
  toggle: Dispatch<SetStateAction<boolean>>;
  modal: boolean;
}) => {
  const [form] = useForm();

  const onFinish = async (values: {
    name: string;
    email: string;
    text: string;
  }) => {
    props.toggle(false);
  };

  return (
    <Modal
      open={props.modal}
      onCancel={() => props.toggle(false)}
      title={"تماس با ما"}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <Form
        form={form}
        name="contactus"
        onFinish={onFinish}
        requiredMark
        autoComplete="off"
        className={styles.contactModal}
        style={{ width: "100%", paddingTop: 12 }}
      >
        <Form.Item
          rules={[{ required: true, message: "نام خود را وارد کنید" }]}
          name={"name"}
          wrapperCol={{ span: 24 }}
        >
          <Input placeholder="نام و نام خانوادگی" />
        </Form.Item>

        <Form.Item
          rules={[
            { required: true, message: "ایمیل خود را وارد کنید" },
            {
              type: "email",
              message: "فرمت ایمیل وارده نادرست است.",
            },
          ]}
          name={"email"}
          wrapperCol={{ span: 24 }}
        >
          <Input placeholder="ایمیل شما" />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: "درخواست خود را وارد کنید" }]}
          name={"text"}
          wrapperCol={{ span: 24 }}
        >
          <Input.TextArea rows={6} placeholder="درخواست خود را وارد کنید" />
        </Form.Item>

        <Form.Item style={{ marginBottom: 12 }}>
          <Button
            htmlType="submit"
            size="middle"
            type="primary"
            style={{ width: "100%" }}
          >
            ارتباط با ما
          </Button>
        </Form.Item>

        <Alert
          type="info"
          style={{ backgroundColor: "transparent" }}
          message={"در اولین فرصت با شما تماس حاصل خواهد شد"}
          closable
          showIcon
        />
      </Form>
    </Modal>
  );
};

export default ContactUsModal;
