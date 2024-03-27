import { Mode } from "@/types/model";
import EditSectionModal from "./editSectionModal";
import EditHeaderModal from "./editHeaderModal";
import { Dispatch, SetStateAction } from "react";
import EditHeroSectionModal from "./editHeroModal";
import EditRatingModal from "./editRatingSection";
import EditAboutModal from "./editAboutModal";

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
  switch (type) {
    case "about":
      return (
        <EditAboutModal
          mode={mode}
          setMode={setMode}
          edit={state}
          setEdit={setState}
        />
      );
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
      return (
        <EditRatingModal
          mode={mode}
          setMode={setMode}
          edit={state}
          setEdit={setState}
        />
      );
    case "resume":
      return <p>resume</p>;
    default:
      return <p>undefined</p>;
  }
};

export default EditModalDispatcher;
