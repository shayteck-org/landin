"use client";

import { EditProvider, Mode } from "@/types/model";
import EditSign from "@/utils/modals/EditSign";
import EditModal from "@/utils/modals/editModal";
import EditSectionModal from "@/utils/modals/editSectionModal";
import { Fragment, useEffect, useState } from "react";
import { createContext } from "react";

type PropsData = {
  children: React.ReactNode;
};

export const EditContext = createContext<EditProvider>({
  mode: "stable",
  setMode: () => {},
  state: null,
  setState: () => {},
});

const EditModalProvider: React.FC<PropsData> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<Mode>("stable");
  const [state, setState] = useState<any>(null);

  return (
    <EditContext.Provider
      value={{
        mode,
        setMode,
        state,
        setState,
      }}
    >
      <EditSign setMode={setMode} />
      {children}
      <EditSectionModal
        edit={state}
        setEdit={setState}
        setMode={setMode}
        mode={mode}
      />
    </EditContext.Provider>
  );
};

export default EditModalProvider;
