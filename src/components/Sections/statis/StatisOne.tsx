import Typography from "@/components/Typography";
import styles from "./statis.module.scss";
import React from "react";
import { Col, Row } from "antd";
import useSectionEdit from "@/hooks/useSectionEdit";

const { Link, Text, Title } = Typography;

type componentsProps = {
  info: {
    id: string;
    elementId: string;
    order: number;
    data: {
      firstTitle: {
        data: { value: string };
      };
      secondTitle: {
        data: { value: string };
      };
      thirdTitle: {
        data: { value: string };
      };
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
};

const StaticOneSection: React.FC<componentsProps> = ({ info }) => {
  const { EditSign, Editor, setMode, state } = useSectionEdit({
    firstData: info,
    type: "statistics",
  });
  const {
    firstTitle,
    secondTitle,
    thirdTitle,
    aveScore,
    customerAmout,
    satisfing,
  } = state;

  return (
    <div
      className={styles.statisOne}
      id="#score"
      style={{ position: "relative", marginBottom: 80 }}
    >
      <EditSign setMode={setMode} />
      <Row className={styles["parent-1"]}>
        <Col>
          <Text textType="paragraph" data={aveScore.data} />
          <Text textType="span" data={firstTitle.data} />
        </Col>
        <Col>
          <Text textType="paragraph" data={satisfing.data} />
          <Text textType="span" data={secondTitle.data} />
        </Col>
        <Col>
          <Text textType="paragraph" data={customerAmout.data} />
          <Text textType="span" data={thirdTitle.data} />
        </Col>
      </Row>
      <Editor />
    </div>
  );
};

export default StaticOneSection;
