import { Mode } from "@/types/model";
import { Dispatch, SetStateAction } from "react";

const EditSign = (props: { setMode: Dispatch<SetStateAction<Mode>> }) => {
  const { setMode } = props;

  if (window.location.href.includes("#test"))
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
