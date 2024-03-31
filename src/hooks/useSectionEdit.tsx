import { editSections } from "@/services/sections";
import { Mode } from "@/types/model";
import EditModalDispatcher from "@/utils/modals/EditModalDispatcher";
import EditSign from "@/utils/modals/EditSign";
import { useEffect, useState } from "react";

export type editHooks = {
  firstData: {
    data: any;
    id: string;
    elementId: string;
    order: number;
  };
  type:
    | "about"
    | "services"
    | "why"
    | "footer"
    | "header"
    | "statistics"
    | "heroSection"
    | "heroSectionTwo"
    | "rating"
    | "resume"
    | "headerTwo";
};

const useSectionEdit = ({ firstData, type }: editHooks) => {
  const [mode, setMode] = useState<Mode>("stable");
  const [time, setTime] = useState<number>(0);
  const [state, setState] = useState<any>(firstData.data);

  useEffect(() => {
    setTime((p) => p + 1);

    async function compair() {
      if (time !== 0 && mode === "stable") {
        if (state !== firstData.data) {
          await editSections({
            id: firstData.id,
            order: firstData.order,
            data: state,
          });
        }
      }
    }
    compair();
  }, [mode]);

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
