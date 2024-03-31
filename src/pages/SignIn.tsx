import titleGenerator from "@/common/titleGenerator/titleGenerator";
import routes, { routesPath, routesTitle } from "@/config/routes/routes";
import userLogin from "@/services/UserSignIn";
import userValidate from "@/services/userValidate";
import { Button, Form, Input, Row } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignInUser = () => {
  document.title = titleGenerator(routesTitle.signin);
  const [loading, toggleLoading] = useState(false);
  const router = useNavigate();

  const onFinish = async (values: any) => {
    toggleLoading(true);
    const status = await userLogin(values);
    if (status) router(routesPath.createApp);
    toggleLoading(false);
  };

  return (
    <Row
      style={{
        padding: "24px",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form style={{ marginInline: "auto" }} onFinish={onFinish}>
        <Form.Item
          rules={[{ required: true, message: "نام کاربری الزامی است." }]}
          name={"username"}
        >
          <Input placeholder="نام کاربری" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "پسورد الزامی است." }]}
          name={"password"}
        >
          <Input.Password placeholder="پسورد" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }} style={{ marginBottom: 12 }}>
          <Button
            loading={loading}
            type="primary"
            style={{ width: "100%" }}
            htmlType="submit"
          >
            ورود
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "center" }}>
          <Link to={routesPath.signup}>ثبت نام</Link>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default SignInUser;
