import { SharedSection, onClickModel } from "@/types/model";
import styles from "@/components/Sections/services/services.module.scss";
import Typography from "@/components/Typography";
import Button from "@/components/Button/Button";
import Image from "@/components/Image/Image";

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
        title: string;
        description: string;
        image_url: string;
        path: string;
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
        {content.map((card) => (
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
              data={{ value: card.data.title }}
            />
            <Text
              className={styles.cardDescription}
              data={{ value: card.data.description }}
              textType="paragraph"
            />

            <Link
              className={styles.cardLink}
              data={{ value: "-> اطلاعات بیشتر", path: card.data.path }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOne;
