import { responseV1 } from "@/mocks/responseV1";
import SectionExtractor from "@/utils/SectionExtractor";
import styles from "@/components/Sections/styles/sections.module.scss";
import { routesTitle } from "@/config/routes/routes";
import titleGenerator from "@/common/titleGenerator/titleGenerator";

const MainPage = () => {
  document.title = titleGenerator(routesTitle.main);

  return (
    <div className={styles.section}>
      {responseV1.map((e) => (
        <div className={styles.container} key={e.order}>
          <SectionExtractor info={e} />
        </div>
      ))}
    </div>
  );
};

export default MainPage;
