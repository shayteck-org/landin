import titleGenerator from "@/common/titleGenerator/titleGenerator";
import routes, { routesTitle } from "@/config/routes/routes";
import userRegister from "@/services/UserSignUp";
import { Button, Form, Input, Row } from "antd";
import { Link } from "react-router-dom";

const SignUpUser = () => {
  document.title = titleGenerator(routesTitle.signup);

  const onFinish = async (values: any) => {
    const status = await userRegister(values);
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
        <Form.Item name={"username"}>
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item name={"password"}>
          <Input.Password placeholder="username" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }} style={{ marginBottom: 12 }}>
          <Button type="primary" style={{ width: "100%" }} htmlType="submit">
            sign up
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "center" }}>
          <Link to={routes.find((r) => r.title === "signin")?.path || "#"}>
            Sign in
          </Link>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default SignUpUser;
