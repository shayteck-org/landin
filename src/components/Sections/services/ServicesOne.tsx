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
        <Text textType="paragraph" data={sectionTitle.data} />
        <Title elementId={title.elementId} data={title.data} level={2} />
      </div>
      <div className={styles["parent-2"]}>
        <ServicesSlider navigation={false} slides={content} />
        {/* {content.map((card) => (
          <div
            style={{
              backgroundColor: card.data.style.bgColor || "var(--white)",
            }}
            key={card.data.id}
            className={styles.card}
          >
            <div className={styles.cardImage}>
              <img src="/sectionP1.png" />
            </div>
            <Title
              className={styles.cardTitle}
              level={2}
              data={card.data.title.data}
            />
            <Text
              className={styles.cardDescription}
              data={card.data.description.data}
              textType="paragraph"
            />

            <Link
              className={styles.cardLink}
              data={{ ...card.data.link.data, value: "اطلاعات بیشتر" }}
            />
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default ServicesOne;
