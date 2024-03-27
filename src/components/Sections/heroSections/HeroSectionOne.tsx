import { SharedSection, onClickModel } from "@/types/model";
import styles from "@/components/Sections/heroSections/heroSection.module.scss";
import Typography from "@/components/Typography";
import Button from "@/components/Button/Button";
import Image from "@/components/Image/Image";
import useSectionEdit from "@/hooks/useSectionEdit";

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
        style: {
          bgColor: string;
        };
        onClick: onClickModel;
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
  const { EditSign, Editor, setMode, state } = useSectionEdit({
    firstData: components as componentsProps["components"],
    type: "heroSection",
  });
  const { button, title, description, image } = state;

  return (
    <section id="#" className={styles.HeroSectionOne}>
      <EditSign setMode={setMode} />
      <div className={styles["parent-1"]}>
        <Title elementId={title.elementId} data={title.data} level={1} />
        <Text textType="paragraph" data={description.data} />
        <Button data={button.data} onClickAction={button.data.onClick}>
          {button.data.value}
        </Button>
      </div>
      <div className={styles["parent-2"]}>
        <Image data={image.data} />
      </div>
      <Editor />
    </section>
  );
};

export default HeroSectionOne;
