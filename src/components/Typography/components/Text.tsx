import { TextModel } from "../model";

const Text: React.FC<TextModel> = ({ data, textType = "paragraph" }) => {
  switch (textType) {
    case "paragraph":
      return <p>{data.value}</p>;
    case "span":
      return <span>{data.value}</span>;
  }
};

export default Text;
