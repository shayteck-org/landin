"use client";
import { createContext, useLayoutEffect, useState } from "react";
import { SharedContextModel } from "../types/model";
import { getData, storeData } from "../config/utils/localStorage";
import storageKeys from "../config/storageKeys";
export const SharedContext = createContext<SharedContextModel>({
  user: "",
  setUser: () => {},
});
const SharedContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string>(
    getData(storageKeys.userInfo) ?? null
  );
  useLayoutEffect(() => {
    if (user) storeData(storageKeys.userInfo, user);
  }, [user]);

  return (
    <>
      <SharedContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </SharedContext.Provider>
    </>
  );
};
export default SharedContextProvider;
