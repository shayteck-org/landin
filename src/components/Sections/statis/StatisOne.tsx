import Typography from "@/components/Typography";
import styles from "./statis.module.scss";
import React from "react";
import { Col, Row } from "antd";
import useSectionEdit from "@/hooks/useSectionEdit";

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
  const { EditSign, Editor, setMode, state } = useSectionEdit({
    firstData: components as componentsProps["components"],
    type: "statistics",
  });
  const { aveScore, customerAmout, satisfing } = state;

  return (
    <div
      className={styles.statisOne}
      id="#score"
      style={{ position: "relative", marginBottom: 80 }}
    >
      <EditSign setMode={setMode} />
      <Row className={styles["parent-1"]}>
        <Col>
          <Text
            textType="paragraph"
            data={{ value: `${aveScore.data.value}/5.0` }}
          />
          <Text
            textType="span"
            data={{ value: "میانگین امتیاز مشتریان عزیز به محصولات ما" }}
          />
        </Col>
        <Col>
          <Text textType="paragraph" data={satisfing.data} />
          <Text
            textType="span"
            data={{ value: "رضایت مشتریان عزیز ما نسبت به خدمات سودِو" }}
          />
        </Col>
        <Col>
          <Text textType="paragraph" data={customerAmout.data} />
          <Text
            textType="span"
            data={{ value: "مشتریانی که هر ماه از ما خرید میکنند" }}
          />
        </Col>
      </Row>
      <Editor />
    </div>
  );
};

export default StaticOneSection;
