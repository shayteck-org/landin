import titleGenerator from "@/common/titleGenerator/titleGenerator";
import routes, { routesPath, routesTitle } from "@/config/routes/routes";
import storageKeys from "@/config/storageKeys";
import { storeData } from "@/config/utils/localStorage";
import { Button, Form, Input, Row, message } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BASE_URL = "http://91.107.186.100:7404/User";

const SignInUser = () => {
  document.title = titleGenerator(routesTitle.signin);
  const [loading, toggleLoading] = useState(false);
  const [step, setStep] = useState<'phone' | 'code'>('phone');
  const [token, setToken] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const router = useNavigate();

  // Step 1: Submit phone number
  const onSubmitPhone = async (values: { phone_number: string }) => {
    toggleLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/client/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: values.phone_number
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setToken(data.token);
        setPhoneNumber(values.phone_number);
        setStep('code');
        message.success(data.message || 'کد تایید ارسال شد');
      } else {
        message.error(data.error || data.message || 'خطا در ارسال کد تایید');
      }
    } catch (error) {
      message.error('خطا در اتصال به سرور');
      console.error('Error:', error);
    }
    toggleLoading(false);
  };

  // Step 2: Validate verification code
  const onSubmitCode = async (values: { code: string }) => {
    toggleLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/client/user/validate-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          code: values.code
        }),
      });

      const data = await response.json();

      if (response.ok && data.message === 'validate success') {
        // Store the final token for authenticated requests
        console.log("Token received:", data.token);
        
        storeData(storageKeys.token, data.token);
        message.success('ورود موفقیت‌آمیز بود');
        router(routesPath.createApp);
      } else {
        message.error(data.message || 'کد تایید نادرست است');
      }
    } catch (error) {
      message.error('خطا در اتصال به سرور');
      console.error('Error:', error);
    }
    toggleLoading(false);
  };

  const goBackToPhone = () => {
    setStep('phone');
    setToken('');
    setPhoneNumber('');
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
      {step === 'phone' ? (
        <Form style={{ marginInline: "auto" }} onFinish={onSubmitPhone}>
          <Form.Item
            rules={[
              { required: true, message: "شماره تلفن الزامی است." },
              { pattern: /^09\d{9}$/, message: "شماره تلفن باید با 09 شروع شده و 11 رقم باشد" }
            ]}
            name={"phone_number"}
          >
            <Input placeholder="شماره تلفن (مثال: 09123456789)" />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }} style={{ marginBottom: 12 }}>
            <Button
              loading={loading}
              type="primary"
              style={{ width: "100%" }}
              htmlType="submit"
            >
              ارسال کد تایید
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "center" }}>
            <Link to={routesPath.signup}>ثبت نام</Link>
          </Form.Item>
        </Form>
      ) : (
        <Form style={{ marginInline: "auto" }} onFinish={onSubmitCode}>
          <div style={{ marginBottom: 16, textAlign: 'center' }}>
            <p>کد تایید به شماره {phoneNumber} ارسال شد</p>
          </div>
          <Form.Item
            rules={[
              { required: true, message: "کد تایید الزامی است." },
              { len: 6, message: "کد تایید باید 6 رقم باشد" }
            ]}
            name={"code"}
          >
            <Input placeholder="کد تایید 6 رقمی" maxLength={6} />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }} style={{ marginBottom: 12 }}>
            <Button
              loading={loading}
              type="primary"
              style={{ width: "100%" }}
              htmlType="submit"
            >
              تایید کد
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "center" }}>
            <Button type="link" onClick={goBackToPhone}>
              تغییر شماره تلفن
            </Button>
          </Form.Item>
        </Form>
      )}
    </Row>
  );
};

export default SignInUser;