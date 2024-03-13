import CryptoJS from "crypto-js";
import config from "..";
export const encrypt = (data: any) =>
  CryptoJS.AES.encrypt(JSON.stringify(data), config.salt).toString();
export const decrypt = (txt: string) => {
  if (!txt) return null;
  var bytes = CryptoJS.AES.decrypt(txt, config.salt);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
