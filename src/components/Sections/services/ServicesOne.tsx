import { SharedSection, onClickModel } from "@/types/model";
import styles from "@/components/Sections/services/services.module.scss";
import Typography from "@/components/Typography";
import Button from "@/components/Button/Button";
import Image from "@/components/Image/Image";
import ServicesSlider from "@/components/Slider/ServiceSlider";
import useSectionEdit from "@/hooks/useSectionEdit";
import { useEffect } from "react";
import { Spin } from "antd";

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
  const { EditSign, Editor, mode, setMode, state, setState } = useSectionEdit({
    firstData: components,
  });

  const loadSlider = () => (
    <ServicesSlider navigation={false} slides={state?.content} />
  );

  useEffect(() => {
    loadSlider();
  }, [state?.content]);

  if (!state) return <Spin fullscreen />;
  return (
    <section id="services" className={styles.ServicesOne}>
      <EditSign setMode={setMode} />
      <div className={styles["parent-1"]}>
        <p>{state.sectionTitle.data.value}</p>
        <h2>{state.title.data.value}</h2>
      </div>
      <div className={styles["parent-2"]}>{loadSlider()}</div>
      <Editor edit={state} setEdit={setState} setMode={setMode} mode={mode} />
    </section>
  );
};

export default ServicesOne;
