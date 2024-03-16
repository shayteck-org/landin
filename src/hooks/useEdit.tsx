import { Mode, editMode } from "@/types/model";
import EditSign from "@/utils/EditSign";
import Editor from "@/utils/editValue";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type editHooks = {
  edit: string;
  setEdit: Dispatch<SetStateAction<string>>;
  firstValue: string;
};

const useEdit = ({ edit, setEdit, firstValue }: editHooks) => {
  const [mode, setMode] = useState<Mode>("stable");

  useEffect(() => {
    async function compair() {
      if (mode === "stable") {
        if (edit !== firstValue) {
          console.log(edit);
          //   await update()
        }
      }
    }
    compair();
  }, [mode, edit]);

  return {
    EditSign,
    Editor,
    mode,
    setMode,
  };
};

export default useEdit;
