import addresses from "@/config/addresses/apiEndpoints";
import http, { setTokenForAPI } from "./HTTP";
import responseLog from "@/common/dataLog/dataLogResponse";

export default async function createApp(values: { app: string }) {
  console.log(values);
  setTokenForAPI();

  try {
    const response = await http.post(addresses.createApp, { name: values.app });
    return responseLog("app.id", response);
  } catch (error: any) {
    return responseLog("", error.response);
  }
}

export async function getUsersApp() {
  setTokenForAPI();

  try {
    const response = await http.get(addresses.getApp);
    responseLog("", response);
    return response.data.apps;
  } catch (error: any) {
    responseLog("", error.response);
  }
}
