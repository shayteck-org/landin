import storageKeys from "@/config/storageKeys";
import { clearStorage, getData, storeData } from "@/config/utils/localStorage";
import { setTokenForAPI } from "@/services/HTTP";
import { message } from "antd";

export default function responseLog(
  key: string,
  response: { data: any; status: number }
) {
  const { data } = response;

  if (response.status === 200) {
    if (key === "token") storeData(storageKeys.token, data[key]);
    else if (key === "user") storeData(storageKeys.userInfo, data);
    else if (key.includes("app")) storeData(storageKeys.appId, data[key]);
    message.success(data.message);
    return true;
  }

  if (key === "token") clearStorage();
  message.error(data.message);
  return false;
}
