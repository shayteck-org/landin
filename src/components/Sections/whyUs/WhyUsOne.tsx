import { SharedSection, onClickModel } from "@/types/model";
import styles from "@/components/Sections/whyUs/WhyUs.module.scss";
import Typography from "@/components/Typography";
import WhyUsSlider from "@/components/Slider/WhyUsSlider";
import useSectionEdit from "@/hooks/useSectionEdit";

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
            value: string;
            image_url: string;
          };
        };
      };
    }[];
  };
}

const WhyUsOne: React.FC<componentsProps> = ({ components }) => {
  const { EditSign, Editor, setMode, state } = useSectionEdit({
    firstData: components,
    type: "why",
  });
  const { sectionTitle, title, content } = state;

  return (
    <section id="whyus" className={styles.whyUsOne}>
      <EditSign setMode={setMode} />

      <div className={styles["parent-1"]}>
        <Text textType="paragraph" data={sectionTitle.data} />
        <Title elementId={title.elementId} data={title.data} level={2} />
      </div>
      <div className={styles["parent-2"]}>
        <WhyUsSlider slides={content} navigation={true} />
      </div>

      <Editor />
    </section>
  );
};

export default WhyUsOne;
