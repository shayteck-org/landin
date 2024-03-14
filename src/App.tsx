import { response } from "./mocks/response";
import ComponentExtractor from "./utils/ComponentExtractor";
import SectionExtractor from "./utils/SectionExtractor";
import styles from "@/styles/sections.module.scss";

function App() {
  return (
    <div className={styles.section}>
      {response.map((e) => (
        <SectionExtractor key={e.section} info={e}>
          {e.data.children.map((ele) => (
            <ComponentExtractor mode="stable" info={ele} key={ele.elementId} />
          ))}
        </SectionExtractor>
      ))}
    </div>
  );
}

export default App;
