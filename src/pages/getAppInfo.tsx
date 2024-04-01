import styles from "@/components/Sections/styles/sections.module.scss";
import { responseV1 } from "@/mocks/responseV1";
import { getAppDetails } from "@/services/createApp";
import SectionExtractor from "@/utils/SectionExtractor";
import { Row, Spin } from "antd";
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const GetAppInfo = () => {
  const [loading, toggleLoading] = useState(true);
  const [section, setSection] = useState<any[]>([]);
  const [appName, setAppName] = useState<string>("");

  const { state } = useLocation();
  const query = useSearchParams();
  const appId = query[0].get("appId");
  document.title = `سایت ${state?.data?.name || "شما"}`;

  useEffect(() => {
    toggleLoading(true);
    (async () => {
      const status = await getAppDetails(appId || "error");
      if (status) {
        setAppName(state?.data.name || status.name);
        const reorderedData = status.section.sort(
          (a: any, b: any) => a.order - b.order
        );
        setSection(reorderedData);
      }
      toggleLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Spin
          tip={"لطفا شکیبا باشید"}
          style={{ backgroundColor: "#16335d43", color: "black" }}
          fullscreen
        />
      ) : (
        <div className={styles.section}>
          {section.map((e, index) => {
            return (
              <div className={styles.container} key={e.order}>
                <SectionExtractor info={e} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default GetAppInfo;
