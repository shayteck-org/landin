import Button from "@/components/Button/Button";
import Image from "@/components/Image/Image";
import Typography from "@/components/Typography";

type props = {
  info: any;
  mode: "edit" | "stable";
};
const { Link, Text, Title } = Typography;

function TextFinder(id: string): "paragraph" | "span" {
  const toNumebr = parseInt(id.slice(-1));
  if (toNumebr % 2 === 1) return "paragraph";
  return "span";
}
const ComponentExtractor = ({ info, mode }: props) => {
  switch (info.elementId.slice(0, 2)) {
    case "01":
      return (
        <Title
          mode={mode}
          data={info.data}
          elementId={info.elementId}
          level={parseInt(info.elementId.slice(-1))}
        />
      );
    case "02":
      return (
        <Text
          mode={mode}
          textType={TextFinder(info.elementId)}
          data={info.data}
          elementId={info.elementId}
        />
      );
    case "03":
      return <Link mode={mode} data={info.data} elementId={info.elementId} />;
    case "04":
      return <Image data={info.data} elementId={info.elementId} mode={mode} />;
    case "05":
      return (
        <Button
          data={info.data}
          elementId={info.elementId}
          mode={mode}
          onClick={() => {
            alert("clicked");
          }}
        />
      );
    default:
      return <div>unknown component</div>;
  }
};

export default ComponentExtractor;
