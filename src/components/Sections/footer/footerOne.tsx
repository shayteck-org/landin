import Button from "@/components/Button/Button";
import Typography from "@/components/Typography";
import { SharedSection, onClickModel } from "@/types/model";
import styles from "@/components/Sections/footer/footer.module.scss";
import { Col, Row } from "antd";
import config from "@/config";
import TwitterIcon from "@/icons/Twitter";
import FaceBookLogo from "@/icons/Facebook";
import InstagramLogo from "@/icons/Instagram";
import LikedinLogo from "@/icons/Linkedin";

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
        <Text className={styles.from} textType="span" data={from.data} />
        <Text className={styles.sogen} textType="paragraph" data={sogen.data} />
        <img alt="logo profile" src={image.data.image_url} />
        <Text className={styles.owner} textType="span" data={owner.data} />
        <Text
          className={styles.ownerPosition}
          textType="span"
          data={ownerPosition.data}
        />
      </Row>
      <Row className={styles.copyright}>
        <Col className={styles.brandSpace}>
          <span>{config.brandName}</span>
          <p>
            تمامی حقوق این وبسایت متعلق به{" "}
            <span className={styles.footer_brandName}>سودِو</span> می باشد
          </p>
        </Col>

        <Col className={styles.socialLinks}>
          <ul>
            <li>
              <a href={config.socialLinks.twitter}>
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href={config.socialLinks.facebook}>
                <FaceBookLogo />
              </a>
            </li>
            <li>
              <a href={config.socialLinks.instagram}>
                <InstagramLogo />
              </a>
            </li>
            <li>
              <a href={config.socialLinks.linkedin}>
                <LikedinLogo />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default FooterOne;
