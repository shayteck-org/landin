import Button from "@/components/Button/Button";
import Typography from "@/components/Typography";
import { SharedSection, onClickModel } from "@/types/model";
import styles from "@/components/Sections/footer/footer.module.scss";
import { Row } from "antd";

const { Link, Text, Title } = Typography;

interface FooterProps extends SharedSection {
  components: {
    from: {
      data: {
        value: string;
      };
    };
    sogen: {
      data: {
        value: string;
      };
    };
    image: {
      data: {
        image_url: string;
      };
    };
    owner: {
      data: {
        value: string;
      };
    };
    ownerPosition: {
      data: {
        value: string;
      };
    };
  };
}

const FooterOne: React.FC<FooterProps> = ({ components }) => {
  const { from, image, owner, sogen, ownerPosition } = components;

  return (
    <footer className={styles.FooterOne}>
      <Row className={styles.footerLorem}>
        <Text textType="span" data={from.data} />
        <Text textType="paragraph" data={sogen.data} />
        <img alt="logo profile" src={image.data.image_url} />
      </Row>
      <Row className={styles.copyright}></Row>
    </footer>
  );
};

export default FooterOne;
