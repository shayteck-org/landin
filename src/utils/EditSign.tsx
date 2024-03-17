import { pageModeDetector } from "@/config/utils/pageDetector";
import { Mode } from "@/types/model";
import { Dispatch, SetStateAction } from "react";

const EditSign = (props: { setMode: Dispatch<SetStateAction<Mode>> }) => {
  const { setMode } = props;

  if (pageModeDetector())
    return (
      <span
        onClick={() => setMode("edit")}
        style={{ cursor: "pointer", display: "block", marginInline: 6 }}
      >
        ✏️
      </span>
    );
};

export default EditSign;
