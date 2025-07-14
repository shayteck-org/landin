import addresses from "@/config/addresses/apiEndpoints";
import http, { setTokenForAPI } from "./HTTP";
import responseLog from "@/common/dataLog/dataLogResponse";

export default async function createApp(values: { app: string , domain: string }) {
  setTokenForAPI();

  try {
    const response = await http.post(addresses.createApp, { name: values.app , domain: values.domain });
    responseLog("app.id", response);
    return response.data.app.id;
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

export async function getAppDetails(appId: string) {
  setTokenForAPI();

  try {
    const response = await http.get(`${addresses.getAppDetails}/${appId}`);
    responseLog("", response);
    return response.data.app;
  } catch (error: any) {
    responseLog("", error.response);
  }
}
