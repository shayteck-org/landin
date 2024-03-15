import styles from "@/styles/sections.module.scss";

type props = {
  children: any;
  info: any;
};

const THEME_VAR = { LIGHT: "light", DARK: "dark" };

const SectionExtractor = ({ children, info }: props) => {
  switch (info.elementId) {
    case "10001":
      return (
        <section className={styles.aboutPart1} style={{}}>
          {children}
        </section>
      );
    case "10002":
      return (
        <section className={styles.aboutPart2} style={{}}>
          {children}
        </section>
      );
    case "20001":
      return (
        <section className={styles.someBox1} style={{}}>
          {children}
        </section>
      );
    case "20002":
      return (
        <section className={styles.someBox2} style={{}}>
          {children}
        </section>
      );
    default:
      return <section>unknown section</section>;
  }
};

export default SectionExtractor;
