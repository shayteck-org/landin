import { response } from "./mocks/response";
import ComponentExtractor from "./utils/ComponentExtractor";
import SectionExtractor from "./utils/SectionExtractor";
import styles from "@/styles/sections.module.scss";

function App() {
  return (
    <div className={styles.section}>
      {/* {response.map((e) => (
        <SectionExtractor key={e.section} info={e}>
          {e.data.children.map((ele) => (
            <>
              {JSON.stringify(ele)}
              <ComponentExtractor
                mode="stable"
                info={ele}
                key={ele.elementId}
              />
            </>
          ))}
        </SectionExtractor>
      ))} */}
      {response.map((e) => (
        <div key={e.elementId} className={styles.container}>
          <SectionExtractor key={e.section} info={e}>
            {e.data.children
              .reduce((acc: any[], ele) => {
                if (!acc[ele.parent]) {
                  acc[ele.parent] = [];
                }
                acc[ele.parent].push(ele);
                return acc;
              }, [])
              .map((group: any[], index: number) => (
                <div key={index} className={`${styles[`parent-${index}`]}`}>
                  {group.map((child) => (
                    <ComponentExtractor
                      mode="stable"
                      info={child}
                      key={child.elementId}
                    />
                  ))}
                </div>
              ))}
          </SectionExtractor>
        </div>
      ))}
    </div>
  );
}

export default App;
