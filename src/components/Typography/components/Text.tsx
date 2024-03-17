import { TextModel } from "../model";

const Text: React.FC<
  TextModel & React.ParamHTMLAttributes<HTMLButtonElement>
> = ({ data, className, textType = "paragraph" }) => {
  switch (textType) {
    case "paragraph":
      return <p className={className}>{data.value}</p>;
    case "span":
      return <span className={className}>{data.value}</span>;
  }
};

export default Text;
