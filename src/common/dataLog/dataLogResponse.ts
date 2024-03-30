import storageKeys from "@/config/storageKeys";
import { clearStorage, storeData } from "@/config/utils/localStorage";
import { message } from "antd";

export default function responseLog(
  key: string,
  response: { data: any; status: number }
) {
  const { data } = response;

  if (response.status === 200) {
    if (key === "token") storeData(storageKeys.token, data[key]);
    else if (key === "user") storeData(storageKeys.userInfo, data);
    message.success(data.message);
    return true;
  }

  clearStorage();
  message.error(data.message);
  return false;
}
