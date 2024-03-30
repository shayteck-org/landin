import http from "./HTTP";

import addresses from "@/config/addresses/apiEndpoints";
import responseLog from "@/common/dataLog/dataLogResponse";

export default async function adminLogin(data: {
  username: string;
  password: string;
}) {
  try {
    const response = await http.post(addresses.adminLogin, data);
    return responseLog("token", response);
  } catch (error: any) {
    return responseLog("", error.response);
  }
}
