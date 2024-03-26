import React from "react";
import { LinkModal } from "../model";
import { pageModeDetector } from "@/config/utils/pageDetector";

const Link: React.FC<
  LinkModal & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ data, elementId, className, ...rest }) => {
  const { ...anchorProps } = rest;

  return (
    <div className={className} style={{ display: "flex", gap: 6 }}>
      <a
        href={data.path}
        {...anchorProps}
        onClick={(e) => {
          pageModeDetector() && e.preventDefault();
        }}
      >
        {data.value}
      </a>
    </div>
  );
};

export default Link;
