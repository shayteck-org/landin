import storageKeys from "../storageKeys";
import { encrypt, decrypt } from "./encryption";
export const storeData = (key: string, data: any) => {
  try {
    localStorage.setItem(key, encrypt(data));
  } catch (err) {
    console.log("error in storing Data", err);
  }
};
export const getData = (key: string): any => {
  try {
    let data = localStorage.getItem(key);
    if (!data) return null;
    return decrypt(data);
  } catch (err) {
    return null;
  }
};
export const clearStorage = () => {
  localStorage.removeItem(storageKeys.token);
  localStorage.removeItem(storageKeys.userInfo);
};
