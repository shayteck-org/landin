import Button from "@/components/Button/Button";
import Typography from "@/components/Typography";
import { SharedSection, onClickModel } from "@/types/model";
import styles from "@/components/Sections/headers/header.module.scss";
import useSectionEdit from "@/hooks/useSectionEdit";

const { Link, Text, Title } = Typography;

interface HeaderProps extends SharedSection {
  components: {
    links: [
      {
        data: {
          id: string;
          value: string;
        };
      },
      {
        data: {
          id: string;
          value: string;
        };
      },
      {
        data: {
          id: string;
          value: string;
        };
      },
      {
        data: {
          value: string;
          id: string;
        };
      }
    ];
    button: {
      elementId: string;
      data: {
        value: string;
        style: {
          bgColor: string;
        };
        onClick: onClickModel;
      };
    };
  };
}

const HeaderOne: React.FC<HeaderProps> = ({ components }) => {
  const { EditSign, Editor, mode, setMode, state, setState } = useSectionEdit({
    firstData: components,
    type: "header",
  });
  const { button, links } = state;

  return (
    <header className={styles.HeaderOne}>
      <nav>
        <EditSign setMode={setMode} />
        <ul>
          <li>
            <Link data={{ path: "#", value: links[0].data.value }} />
          </li>
          <li>
            <Link data={{ path: "#services", value: links[1].data.value }} />
          </li>
          <li>
            <Link data={{ path: "#resume", value: links[2].data.value }} />
          </li>
          <li>
            <Link data={{ path: "#contact", value: links[3].data.value }} />
          </li>
        </ul>
        <Button data={button.data} onClickAction={button.data.onClick}>
          {button.data.value}
        </Button>
        <Editor />
      </nav>
    </header>
  );
};

export default HeaderOne;
