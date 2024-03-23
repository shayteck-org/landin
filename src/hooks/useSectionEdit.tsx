import { Mode, SharedAttributes, editMode } from "@/types/model";
import EditSign from "@/utils/modals/EditSign";
import EditSectionModal from "@/utils/modals/editSectionModal";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type editHooks = {
  firstData: any;
};

const useSectionEdit = ({ firstData }: editHooks) => {
  const [mode, setMode] = useState<Mode>("stable");
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    setState(firstData);
    console.log(state);
  }, []);

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
    Editor: EditSectionModal,
    mode,
    setMode,
    setState,
    state,
  };
};

export default useSectionEdit;
