import createApp, { getUsersApp } from "@/services/createApp";
import { Button, Col, Form, Input, Row } from "antd";
import { useState } from "react";

const CreateAppForUser = () => {
  const [data, setData] = useState<Partial<any[]>>([]);
  const [loading, toggleLoading] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    const { app } = values;
    toggleLoading(true);
    await createApp({ app });
    toggleLoading(false);
  };

  const showApps = async () => {
    toggleLoading(true);
    const apps = await getUsersApp();
    if (apps) setData(apps);
    toggleLoading(false);
  };

  return (
    <Row
      style={{
        padding: "24px",
        minHeight: "100vh",
        justifyContent: "center",
        flexWrap: "nowrap",
        gap: 16,
      }}
    >
      <Col xs={6}>
        <Form onFinish={onFinish}>
          <Form.Item>
            <Button type="primary" style={{ width: "100%" }} htmlType="submit">
              ساخت
            </Button>
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "نام اپلیکیشن را وارد کنید" }]}
            name={"app"}
          >
            <Input placeholder="نام اپلیکیشن را وارد کنید" />
          </Form.Item>
        </Form>
      </Col>

      <Col xs={6}>
        <Row>
          <Button
            onClick={showApps}
            type="primary"
            style={{ width: "100%", marginBottom: 24 }}
            loading={loading}
          >
            دریافت اپ های من
          </Button>

          <Row style={{ flexDirection: "row", gap: 16 }}>
            {data.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #00000032",
                  borderRadius: 8,
                  padding: "8px 12px",
                  flex: 1,
                  minWidth: "100%",
                }}
              >
                نام اپلیکیشن : {item.name}
                <br />
                تعداد سکشن ها : {item._count.section}
                <br />
                وضعیت : {item.isActive ? "فعال" : "غیرفعال"}
              </div>
            ))}
          </Row>
        </Row>
      </Col>
    </Row>
  );
};

export default CreateAppForUser;
