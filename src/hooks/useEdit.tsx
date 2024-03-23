import { Mode, SharedAttributes, editMode } from "@/types/model";
import EditSign from "@/utils/modals/EditSign";
import EditModal from "@/utils/modals/editModal";
import Editor from "@/utils/modals/editValue";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type editHooks = {
  // edit: string;
  // setEdit: Dispatch<SetStateAction<string>>;
  firstData: any;
  // firstData: SharedAttributes["data"];
};

const useEdit = ({ firstData }: editHooks) => {
  const [mode, setMode] = useState<Mode>("stable");
  const [state, setState] = useState<any>(null);
  console.log(firstData);

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
    Editor: EditModal,
    mode,
    setMode,
    setState,
    state,
  };
};

export default useEdit;
