import { Mode } from "@/types/model";
import EditModalDispatcher from "@/utils/modals/EditModalDispatcher";
import EditSign from "@/utils/modals/EditSign";
import EditSectionModal from "@/utils/modals/editSectionModal";
import { useEffect, useState } from "react";

type editHooks = {
  firstData: any;
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
};

const useSectionEdit = ({ firstData, type }: editHooks) => {
  const [mode, setMode] = useState<Mode>("stable");
  const [state, setState] = useState<typeof firstData>(firstData);

  useEffect(() => {
    async function compair() {
      if (mode === "stable") {
        if (state !== firstData) {
          console.log(state);
          //   await update()
        }
      }
    }
    compair();
  }, [mode, state]);

  return {
    EditSign,
    Editor: () => (
      <EditModalDispatcher
        type={type}
        mode={mode}
        setMode={setMode}
        state={state}
        setState={setState}
      />
    ),
    mode,
    setMode,
    setState,
    state,
  };
};

export default useSectionEdit;
