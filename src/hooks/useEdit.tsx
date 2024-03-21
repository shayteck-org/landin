import { Mode, SharedAttributes, editMode } from "@/types/model";
import EditSign from "@/utils/modals/EditSign";
import EditModal from "@/utils/modals/editModal";
import Editor from "@/utils/modals/editValue";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type editHooks = {
  edit: string;
  setEdit: Dispatch<SetStateAction<string>>;
  firstData: any;
  // firstData: SharedAttributes["data"];
};

const useEdit = ({ edit, setEdit, firstData }: editHooks) => {
  const [mode, setMode] = useState<Mode>("stable");
  console.log(firstData);

  useEffect(() => {
    async function compair() {
      if (mode === "stable") {
        if (edit !== firstData.value) {
          console.log(edit);
          //   await update()
        }
      }
    }
    compair();
  }, [mode, edit]);

  return {
    EditSign,
    Editor: EditModal,
    mode,
    setMode,
  };
};

export default useEdit;
