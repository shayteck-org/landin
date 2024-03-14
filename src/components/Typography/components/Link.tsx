import React from "react";
import { LinkModal } from "../model";

const Link: React.FC<
  LinkModal & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ data, elementId, ...rest }) => {
  const { mode, ...anchorProps } = rest;

  return (
    <a href={data.path} {...anchorProps}>
      {data.value}
    </a>
  );
};

export default Link;
