import { TitleModal } from "../model";

const Title: React.FC<TitleModal> = ({ data, elementId, level = 6 }) => {
  const TitleTag = `h${level}` as keyof JSX.IntrinsicElements;
  return <TitleTag key={elementId}>{data.value}</TitleTag>;
};

export default Title;
