import { SharedSection, onClickModel } from "@/types/model";
import styles from "@/components/Sections/services/services.module.scss";
import Typography from "@/components/Typography";
import Button from "@/components/Button/Button";
import Image from "@/components/Image/Image";
import ServicesSlider from "@/components/Slider/ServiceSlider";

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
            image_url: string;
          };
        };
        link: {
          data: {
            path: string;
          };
        };
        style: { bgColor: string };
      };
    }[];
  };
}

const ServicesOne: React.FC<componentsProps> = ({ components }) => {
  const { sectionTitle, title, content } = components;

  return (
    <section id="services" className={styles.ServicesOne}>
      <div className={styles["parent-1"]}>
        <p>{sectionTitle.data.value}</p>
        <h2>{title.data.value}</h2>
      </div>
      <div className={styles["parent-2"]}>
        <ServicesSlider navigation={false} slides={content} />
      </div>
    </section>
  );
};

export default ServicesOne;
