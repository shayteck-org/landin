import Button from "@/components/Button/Button";
import Typography from "@/components/Typography";
import { SharedSection, onClickModel } from "@/types/model";
import styles from "@/components/Sections/headers/header.module.scss";

const { Link, Text, Title } = Typography;

interface HeaderProps extends SharedSection {
  components: {
    links: [
      {
        home: {
          data: {
            value: string;
            path: string;
          };
        };
        services: {
          data: {
            value: string;
            path: string;
          };
        };
        resume: {
          data: {
            value: string;
            path: string;
          };
        };
        contact: {
          data: {
            value: string;
            path: string;
          };
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
  const { button, links } = components;

  return (
    <header className={styles.HeaderOne}>
      <ul>
        <li>
          <Link mode="stable" data={links[0].home.data} />
        </li>
        <li>
          <Link mode="stable" data={links[0].services.data} />
        </li>
        <li>
          <Link mode="stable" data={links[0].resume.data} />
        </li>
        <li>
          <Link mode="stable" data={links[0].contact.data} />
        </li>
      </ul>
      <Button
        data={button.data}
        mode="stable"
        onClickAction={button.data.onClick}
      >
        {button.data.value}
      </Button>
    </header>
  );
};

export default HeaderOne;
