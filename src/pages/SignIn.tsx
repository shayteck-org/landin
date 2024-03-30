import titleGenerator from "@/common/titleGenerator/titleGenerator";
import routes, { routesTitle } from "@/config/routes/routes";
import userLogin from "@/services/UserSignIn";
import userValidate from "@/services/userValidate";
import { Button, Form, Input, Row } from "antd";
import { Link } from "react-router-dom";

const SignInUser = () => {
  document.title = titleGenerator(routesTitle.signin);

  const onFinish = async (values: any) => {
    const status = await userLogin(values);
    if (status) {
      const validation = await userValidate();
    }
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
            sign in
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "center" }}>
          <Link to={routes.find((r) => r.title === "signup")?.path || "#"}>
            Sign up
          </Link>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default SignInUser;
