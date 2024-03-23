import React, { useEffect, useState } from "react";
import { LinkModal } from "../model";
import useEdit from "@/hooks/useEdit";
import { pageModeDetector } from "@/config/utils/pageDetector";

const Link: React.FC<
  LinkModal & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ data, elementId, className, ...rest }) => {
  const { ...anchorProps } = rest;
  const { EditSign, Editor, mode, setMode, setState, state } = useEdit({
    firstData: data || "",
  });

  useEffect(() => {
    setState(data.value);
  }, []);

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
        {state}
      </a>
      <Editor
        defaultValues={data}
        edit={state}
        setEdit={setState}
        setMode={setMode}
        mode={mode}
      />
    </div>
  );
};

export default Link;
