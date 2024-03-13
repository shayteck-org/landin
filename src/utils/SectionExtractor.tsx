import styles from "@/styles/sections.module.scss";

type props = {
  children: any;
  info: any;
};

const THEME_VAR = { LIGHT: "light", DARK: "dark" };

const SectionExtractor = ({ children, info }: props) => {
  switch (info.elementId) {
    case 1224:
      return (
        <div
          className={styles.introductionPart1}
          style={{
            backgroundColor:
              info.data.theme === THEME_VAR.LIGHT ? "burlywood" : "peachpuff",
          }}
        >
          {children}
        </div>
      );
    case 1204:
      return (
        <div
          className={styles.introductionPart2}
          style={{
            backgroundColor:
              info.data.theme === THEME_VAR.LIGHT ? "burlywood" : "peachpuff",
          }}
        >
          {children}
        </div>
      );
    default:
      return <div>unknown section</div>;
  }
};

export default SectionExtractor;
