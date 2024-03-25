import tailRight from "@/icons/tail-right.svg";
import { SharedSection, onClickModel } from "@/types/model";
import styles from "@/components/Sections/resume/resume.module.scss";
import Typography from "@/components/Typography";
import WhyUsSlider from "@/components/Slider/WhyUsSlider";
import { Col, Row } from "antd";
import ResumeSlider from "@/components/Slider/ResumeSlider";
import TailRight from "@/icons/TailRight";

const { Link, Text, Title } = Typography;

interface componentsProps extends SharedSection {
  components: {
    sectionTitle: { elementId: string; data: { value: string } };
    title: {
      elementId: string;
      data: {
        value: string;
      };
    };
    link: {
      data: {
        path: string;
      };
    };
    content: {
      data: {
        id: string;
        title: {
          data: {
            value: string;
          };
        };
        description: {
          data: {
            value: string;
          };
        };
        image: {
          data: {
            value: string;
            image_url: string;
          };
        };
      };
    }[];
  };
}

const ResumeOne: React.FC<componentsProps> = ({ components }) => {
  const { sectionTitle, title, content, link } = components;

  return (
    <section id="resume" className={styles.ResumeOne}>
      <div className={styles["parent-1"]}>
        <Text textType="paragraph" data={sectionTitle.data} />
        <Title elementId={title.elementId} data={title.data} level={2} />
      </div>
      <div className={styles["parent-2"]}>
        <ResumeSlider slides={content} navigation={true} />
      </div>
      <Row
        className={styles.checkMore}
        style={{ marginTop: "auto", alignItems: "center" }}
        gutter={8}
      >
        <Col style={{ display: "flex", alignItems: "center" }}>
          <TailRight stroke="#1677ff" />
        </Col>
        <Col>
          <a
            style={{ position: "relative" }}
            href={link.data.path}
            className={styles.cardLink}
          >
            نمونه کار های بیشتر
          </a>
        </Col>
      </Row>
    </section>
  );
};

export default ResumeOne;
