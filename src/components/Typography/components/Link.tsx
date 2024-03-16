import React, { useState } from "react";
import { LinkModal } from "../model";
import useEdit from "@/hooks/useEdit";

const Link: React.FC<
  LinkModal & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ data, elementId, ...rest }) => {
  const { ...anchorProps } = rest;
  const [value, setValue] = useState<string>(data.value || "");
  const { EditSign, Editor, mode, setMode } = useEdit({
    edit: value,
    setEdit: setValue,
    firstValue: data.value || "",
  });

  if (mode === "stable")
    return (
      <div style={{ display: "flex", gap: 6 }}>
        <EditSign setMode={setMode} />
        <a href={data.path} {...anchorProps}>
          {value}
        </a>
      </div>
    );
  return <Editor edit={value} setEdit={setValue} setMode={setMode} />;
};

export default Link;
