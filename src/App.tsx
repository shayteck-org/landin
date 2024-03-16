import { responseV1 } from "../responseV1";
import SectionExtractor from "./utils/SectionExtractor";
import styles from "@/styles/sections.module.scss";

function App() {
  return (
    <div className={styles.section}>
      {responseV1.map((e) => (
        <SectionExtractor key={e.section} info={e} />
      ))}
    </div>
  );
}

export default App;
