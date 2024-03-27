import { Mode } from "@/types/model";
import EditSectionModal from "./editSectionModal";
import EditHeaderModal from "./editHeaderModal";
import { Dispatch, SetStateAction } from "react";
import EditHeroSectionModal from "./editHeroModal";

type Props = {
  type:
    | "about"
    | "services"
    | "why"
    | "footer"
    | "header"
    | "statistics"
    | "heroSection"
    | "rating"
    | "resume";
  mode: Mode;
  setMode: Dispatch<SetStateAction<Mode>>;
  state: any;
  setState: Dispatch<SetStateAction<any>>;
};

const EditModalDispatcher = ({
  type,
  mode,
  setMode,
  setState,
  state,
}: Props): JSX.Element => {
  console.log(type, state);

  switch (type) {
    case "about":
      return <p>about</p>;
    case "services":
      return (
        <EditSectionModal
          mode={mode}
          setMode={setMode}
          edit={state}
          setEdit={setState}
        />
      );
    case "why":
      return <p>why</p>;
    case "footer":
      return <p>footer</p>;
    case "header":
      return (
        <EditHeaderModal
          mode={mode}
          setMode={setMode}
          edit={state}
          setEdit={setState}
        />
      );
    case "statistics":
      return <p>statistics</p>;
    case "heroSection":
      return (
        <EditHeroSectionModal
          mode={mode}
          setMode={setMode}
          edit={state}
          setEdit={setState}
        />
      );
    case "rating":
      return <p>rating</p>;
    case "resume":
      return <p>resume</p>;
    default:
      return <p>undefined</p>;
  }
};

export default EditModalDispatcher;
