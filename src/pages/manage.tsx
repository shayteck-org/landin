import titleGenerator from "@/common/titleGenerator/titleGenerator";
import { routesTitle } from "@/config/routes/routes";
import adminLogin from "@/services/AdminLogin";
import { Button, Form, Input, Row } from "antd";

const ManagerLogin = () => {
  document.title = titleGenerator(routesTitle.manage);

  const onFinish = async (values: any) => {
    const status = await adminLogin(values);
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
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" style={{ width: "100%" }} htmlType="submit">
            login
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default ManagerLogin;
