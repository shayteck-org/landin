import Typography from "@/components/Typography";
import styles from "./statis.module.scss";
import React from "react";
import { Col, Row } from "antd";

const { Link, Text, Title } = Typography;

type componentsProps = {
  components: {
    aveScore: {
      data: {
        value: string;
      };
    };
    satisfing: {
      data: {
        value: string;
      };
    };
    customerAmout: {
      data: {
        value: string;
      };
    };
  };
};

const StaticOneSection: React.FC<componentsProps> = ({ components }) => {
  const { aveScore, customerAmout, satisfing } = components;

  return (
    <div className={styles.statisOne} id="#score" style={{ marginBottom: 80 }}>
      <Row className={styles["parent-1"]} gutter={[60, 66]}>
        <Col span={8}>
          <Text
            textType="paragraph"
            data={{ value: `${aveScore.data.value}/5.0` }}
          />
          <Text
            textType="span"
            data={{ value: "میانگین امتیاز مشتریان عزیز به محصولات ما" }}
          />
        </Col>
        <Col span={8}>
          <Text textType="paragraph" data={satisfing.data} />
          <Text
            textType="span"
            data={{ value: "رضایت مشتریان عزیز ما نسبت به خدمات سودِو" }}
          />
        </Col>
        <Col span={8}>
          <Text textType="paragraph" data={customerAmout.data} />
          <Text
            textType="span"
            data={{ value: "مشتریانی که هر ماه از ما خرید میکنند" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default StaticOneSection;
