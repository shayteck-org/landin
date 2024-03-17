import React, { useState } from "react";
import { LinkModal } from "../model";
import useEdit from "@/hooks/useEdit";
import { pageModeDetector } from "@/config/utils/pageDetector";

const Link: React.FC<
  LinkModal & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ data, elementId, className, ...rest }) => {
  const { ...anchorProps } = rest;
  const [value, setValue] = useState<string>(data.value || "");
  const { EditSign, Editor, mode, setMode } = useEdit({
    edit: value,
    setEdit: setValue,
    firstData: data || "",
  });

  return (
    <div className={className} style={{ display: "flex", gap: 6 }}>
      <EditSign setMode={setMode} />
      <a
        href={data.path}
        {...anchorProps}
        onClick={(e) => {
          pageModeDetector() && e.preventDefault();
        }}
      >
        {value}
      </a>
      <Editor
        defaultValues={data}
        edit={value}
        setEdit={setValue}
        setMode={setMode}
        mode={mode}
      />
    </div>
  );
};

export default Link;
