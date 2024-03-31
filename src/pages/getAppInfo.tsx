import styles from "@/components/Sections/styles/sections.module.scss";
import { responseV1 } from "@/mocks/responseV1";
import { getAppDetails } from "@/services/createApp";
import SectionExtractor from "@/utils/SectionExtractor";
import { Row, Spin } from "antd";
import { useLayoutEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const GetAppInfo = () => {
  const [loading, toggleLoading] = useState(false);
  const [section, setSection] = useState<any[]>([]);
  const [appName, setAppName] = useState<string>("");

  const { state } = useLocation();
  const query = useSearchParams();
  const appId = query[0].get("appId");
  document.title = `سایت ${state?.data?.name || "شما"}`;

  useLayoutEffect(() => {
    toggleLoading(true);
    (async () => {
      const status = await getAppDetails(appId || "error");
      if (status) {
        setAppName(state?.data.name || status.name);
        setSection(status.section);
      }
    })();
    toggleLoading(false);
  }, []);

  return (
    <>
      {loading && (
        <Spin
          tip={"لطفا شکیبا باشید"}
          style={{ backgroundColor: "#16335d43", color: "black" }}
          fullscreen
        />
      )}
      <div className={styles.section}>
        {section.map((e) => (
          <div className={styles.container} key={e.order}>
            <SectionExtractor info={e} />
          </div>
        ))}
      </div>
    </>
  );
};

export default GetAppInfo;
