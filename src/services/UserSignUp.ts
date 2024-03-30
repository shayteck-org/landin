import http from "./HTTP";

import addresses from "@/config/addresses/apiEndpoints";
import responseLog from "@/common/dataLog/dataLogResponse";

export default async function userRegister(data: {
  username: string;
  password: string;
}) {
  try {
    const response = await http.post(addresses.userRegister, data);
    return responseLog("", response);
  } catch (error: any) {
    return responseLog("", error.response);
  }
}
