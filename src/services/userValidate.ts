import http, { setTokenForAPI } from "./HTTP";

import addresses from "@/config/addresses/apiEndpoints";
import responseLog from "@/common/dataLog/dataLogResponse";

export default async function userValidate() {
  setTokenForAPI();

  try {
    const response = await http.get(addresses.userValidate);
    return responseLog("user", response);
  } catch (error: any) {
    return responseLog("", error.response);
  }
}
