import Typography from "@/components/Typography";
import styles from "./aboutUs.module.scss";
import React from "react";
import { Row } from "antd";
import Image from "@/components/Image/Image";
import useSectionEdit from "@/hooks/useSectionEdit";

const { Link, Text, Title } = Typography;

type componentsProps = {
  info: {
    id: string;
    elementId: string;
    order: number;
    data: {
      sectionTitle: {
        data: {
          value: string;
        };
      };
      descriptionOne: {
        data: {
          value: string;
        };
      };
      descriptionTwo: {
        data: {
          value: string;
        };
      };
      imageOne: {
        data: {
          value: string;
          image_url: string;
        };
      };
      imageTwo: {
        data: {
          value: string;
          image_url: string;
        };
      };
      imageThree: {
        data: {
          value: string;
          image_url: string;
        };
      };
    };
  };
};

const AboutUsOne: React.FC<componentsProps> = ({ info }) => {
  const { EditSign, Editor, setMode, state } = useSectionEdit({
    firstData: info,
    type: "about",
  });
  const {
    sectionTitle,
    descriptionOne,
    descriptionTwo,
    imageOne,
    imageThree,
    imageTwo,
  } = state;

  return (
    <div className={styles.aboutOne} id="#about" style={{ marginBottom: 80 }}>
      <EditSign setMode={setMode} />
      <Row className={styles["parent-1"]}>
        <Text
          textType="paragraph"
          data={sectionTitle.data}
          className={styles.sectionTitle}
        />
      </Row>
      <Row className={styles.descriptionBox}>
        <Text textType="span" data={descriptionOne.data} />
      </Row>
      <Row className={styles.imageHolder}>
        <Image className={styles.imageOne} data={imageOne.data} />
        <Image className={styles.imageTwo} data={imageTwo.data} />
        <Image className={styles.imageThree} data={imageThree.data} />
      </Row>
      <Text
        className={styles.descriptionTwo}
        textType="span"
        data={descriptionTwo.data}
      />
      <Editor />
    </div>
  );
};

export default AboutUsOne;
