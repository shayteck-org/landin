import { HtmlHTMLAttributes } from "react";
import { TitleModal } from "../model";

const Title: React.FC<TitleModal & HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  data,
  elementId,
  level = 6,
  className,
}) => {
  const TitleTag = `h${level}` as keyof JSX.IntrinsicElements;
  return <TitleTag className={className}>{data.value}</TitleTag>;
};

export default Title;
