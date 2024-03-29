import { Mode } from "@/types/model";
import EditSectionModal from "./editSectionModal";
import EditHeaderModal from "./editHeaderModal";
import { Dispatch, SetStateAction } from "react";
import EditHeroSectionModal from "./editHeroModal";
import EditRatingModal from "./editRatingSection";
import EditAboutModal from "./editAboutModal";
import EditStaticsticsModal from "./editStatisticsModal";
import EditWhyUsModal from "./editWhyUsModal";
import EditResumeModal from "./editResumeModal";
import EditFooterModal from "./editFooterModal";
import EditHeaderTwoModal from "./editHeaderTwoModal";
import { editHooks } from "@/hooks/useSectionEdit";
import EditHeroSectionTwoModal from "./editHeroTwoModal";

type Props = {
  type: editHooks["type"];
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
      return (
        <EditWhyUsModal
          mode={mode}
          setMode={setMode}
          edit={state}
          setEdit={setState}
        />
      );
    case "footer":
      return (
        <EditFooterModal
          mode={mode}
          setMode={setMode}
          edit={state}
          setEdit={setState}
        />
      );
    case "header":
      return (
        <EditHeaderModal
          mode={mode}
          setMode={setMode}
          edit={state}
          setEdit={setState}
        />
      );
    case "headerTwo":
      return (
        <EditHeaderTwoModal
          mode={mode}
          setMode={setMode}
          edit={state}
          setEdit={setState}
        />
      );
    case "statistics":
      return (
        <EditStaticsticsModal
          mode={mode}
          setMode={setMode}
          edit={state}
          setEdit={setState}
        />
      );
    case "heroSection":
      return (
        <EditHeroSectionModal
          mode={mode}
          setMode={setMode}
          edit={state}
          setEdit={setState}
        />
      );
    case "heroSectionTwo":
      return (
        <EditHeroSectionTwoModal
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
      return (
        <EditResumeModal
          mode={mode}
          setMode={setMode}
          edit={state}
          setEdit={setState}
        />
      );
    default:
      return <p>undefined</p>;
  }
};

export default EditModalDispatcher;
