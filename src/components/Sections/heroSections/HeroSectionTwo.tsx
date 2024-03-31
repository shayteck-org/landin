import { SharedSection, onClickModel } from "@/types/model";
import styles from "@/components/Sections/heroSections/heroSection.module.scss";
import Typography from "@/components/Typography";
import Button from "@/components/Button/Button";
import Image from "@/components/Image/Image";
import useSectionEdit from "@/hooks/useSectionEdit";

const { Link, Text, Title } = Typography;

interface componentsProps extends SharedSection {
  info: {
    elementId: string;
    order: number;
    id: string;
    data: {
      title: {
        elementId: string;
        data: {
          value: string;
        };
      };
      sectionTitle: {
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
  };
}

const HeroSectionTwo: React.FC<componentsProps> = ({ info }) => {
  const { EditSign, Editor, setMode, state } = useSectionEdit({
    firstData: info,
    type: "heroSectionTwo",
  });
  const { button, title, description, image, sectionTitle } = state;

  return (
    <section id="#" className={styles.HeroSectionTwo}>
      <EditSign setMode={setMode} />
      <Image data={image.data} />
      <Text
        className={styles.sectionTitle}
        textType="paragraph"
        data={sectionTitle.data}
      />

      <Title elementId={title.elementId} data={title.data} level={1} />
      <Text textType="paragraph" data={description.data} />
      <Button data={button.data} onClickAction={button.data.onClick}>
        {button.data.value}
      </Button>
      <Editor />
    </section>
  );
};

export default HeroSectionTwo;
