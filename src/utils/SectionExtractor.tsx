import HeroSectionOne from "@/components/Sections/HeroSections/HeroSectionOne";
import styles from "@/styles/sections.module.scss";

type props = {
  info: any;
};
const THEME_VAR = { LIGHT: "light", DARK: "dark" };

const SectionExtractor = ({ info }: props) => {
  switch (info.elementId) {
    case "10001":
      return <HeroSectionOne components={info.data} />;
    case "10002":
      return <section className={styles.aboutPart2} style={{}}></section>;
    case "20001":
      return <section className={styles.someBox1} style={{}}></section>;
    case "20002":
      return <section className={styles.someBox2} style={{}}></section>;
    default:
      return <section>unknown section</section>;
  }
};

export default SectionExtractor;
