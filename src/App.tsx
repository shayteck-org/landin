import { responseV1 } from "./mocks/responseV1";
import SectionExtractor from "./utils/SectionExtractor";
import styles from "@/components/Sections/styles/sections.module.scss";

function App() {
  return (
    <div className={styles.section}>
      {responseV1.map((e) => (
        <div className={styles.container} key={e.section}>
          <SectionExtractor info={e} />
        </div>
      ))}
    </div>
  );
}

export default App;
