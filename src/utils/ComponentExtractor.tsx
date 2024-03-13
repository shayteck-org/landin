import Typography from "@/components/Typography";

type props = {
  info: any;
};
const { Link, Text, Title } = Typography();

function TextFinder(id: number): "paragraph" | "span" {
  const idString = id.toString();
  const toNumebr = parseInt(idString.slice(-1));
  if (toNumebr % 2 === 1) return "paragraph";
  return "span";
}
const ComponentExtractor = ({ info }: props) => {
  switch (info.elementId) {
    case 1001:
      return (
        <Title
          data={info.data}
          elementId={info.elementId}
          level={parseInt(info.elementId.toString().slice(-1))}
        />
      );
    case 2002:
      return (
        <Text
          textType={TextFinder(info.elementId)}
          data={info.data}
          elementId={info.elementId}
        />
      );
    case 3003:
      return <Link data={info.data} elementId={info.elementId} />;
    default:
      return <div>unknown component</div>;
  }
};

export default ComponentExtractor;
