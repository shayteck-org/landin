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
        <Form.Item
          rules={[{ required: true, message: "نام کاربری خود را وارد کنید" }]}
          name={"username"}
        >
          <Input placeholder="نام کاربری" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "پسورد خود را وارد کنید" }]}
          name={"password"}
        >
          <Input.Password placeholder="پسورد" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" style={{ width: "100%" }} htmlType="submit">
            ورود
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default ManagerLogin;
