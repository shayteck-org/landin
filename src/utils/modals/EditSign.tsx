import { pageModeDetector } from "@/config/utils/pageDetector";
import { Mode } from "@/types/model";
import { Dispatch, SetStateAction } from "react";

import "@/styles/_app.scss";

const EditSign = (props: { setMode: Dispatch<SetStateAction<Mode>> }) => {
  const { setMode } = props;

  if (pageModeDetector())
    return (
      <span className="editSign" onClick={() => setMode("edit")}>
        ویرایش ✏️
      </span>
    );
};

export default EditSign;
