import { SharedSection } from "@/types/model";
import styles from "@/styles/sections.module.scss";
import ComponentExtractor from "@/utils/ComponentExtractor";
import Typography from "@/components/Typography";
import Button from "@/components/Button/Button";
import Image from "@/components/Image/Image";

const { Link, Text, Title } = Typography;

interface componentsProps extends SharedSection {
  components: {
    title: {
      elementId: string;
      data: {
        value: string;
      };
    };
    description: {
      elementId: string;
      data: {
        value: string;
      };
    };
    button: {
      elementId: string;
      data: {
        value: string;
        onClick: () => {};
        style: {
          bgColor?: string;
        };
      };
    };
    image: {
      elementId: string;
      data: {
        value: string;
        image_url: string;
      };
    };
  };
}

const HeroSectionOne: React.FC<componentsProps> = ({ components }) => {
  const { title, button, description, image } = components;

  return (
    <section className={styles.HeroSectionOne}>
      <div className={styles["parent-1"]}>
        <Title
          mode="stable"
          elementId={title.elementId}
          data={title.data}
          level={1}
        />
        <Text textType="paragraph" mode="stable" data={description.data} />
        <Button data={button.data} mode="stable" onClick={button.data.onClick}>
          {button.data.value}
        </Button>
      </div>
      <div className={styles["parent-2"]}>
        <Image data={image.data} mode="stable" />
      </div>
    </section>
  );
};

export default HeroSectionOne;
