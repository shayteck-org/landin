import titleGenerator from "@/common/titleGenerator/titleGenerator";
import { routesPath, routesTitle } from "@/config/routes/routes";
import storageKeys from "@/config/storageKeys";
import { storeData } from "@/config/utils/localStorage";
import createApp, { getUsersApp } from "@/services/createApp";
import { setSectionArray } from "@/services/sections";
import { Button, Col, Form, Input, Row } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateAppForUser = () => {
  document.title = titleGenerator(routesTitle.createApp);
  const [data, setData] = useState<Partial<any[]>>([]);
  const [loading, toggleLoading] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    const { app , domain } = values;
    toggleLoading(true);
    const status = await createApp({ app , domain });
    if (status) await setSectionArray(status);
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
            <Button
              disabled={loading}
              type="primary"
              style={{ width: "100%" }}
              htmlType="submit"
            >
              ساخت
            </Button>
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "نام اپلیکیشن را وارد کنید" }]}
            name={"app"}
          >
            <Input placeholder="نام اپلیکیشن را وارد کنید" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "ساب دامنه اپلیکیشن را وارد کنید" }]}
            name={"domain"}
          >
            <Input placeholder="ساب دامنه اپلیکیشن را وارد کنید" />
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
                onClick={() => storeData(storageKeys.appId, item.id)}
              >
                <Link
                  state={{ data: { name: item.name, status: item.isActive } }}
                  to={`${routesPath.site}/?appId=${item.id}`}
                >
                  نمایش اپلیکیشن : {item.name}
                </Link>
                <br />
                <Link
                  style={{ color: "var(--red-title)" }}
                  state={{ data: { name: item.name, status: item.isActive } }}
                  to={`${routesPath.editSite}/?appId=${item.id}`}
                >
                  ویرایش اپلیکیشن : {item.name}
                </Link>
                <br />
                وضعیت : {item._count.section > 0 ? "فعال" : "غیرفعال"}
              </div>
            ))}
          </Row>
        </Row>
      </Col>
    </Row>
  );
};

export default CreateAppForUser;
