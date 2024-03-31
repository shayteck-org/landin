import responseLog from "@/common/dataLog/dataLogResponse";
import http, { setTokenForAPI } from "./HTTP";
import addresses from "@/config/addresses/apiEndpoints";
import { responseV1 } from "@/mocks/responseV1";
import { getData } from "@/config/utils/localStorage";
import storageKeys from "@/config/storageKeys";

export async function setSectionArray(appId: any) {
  setTokenForAPI();

  try {
    const response = await http.post(`${addresses.setAppSectionsAsArray}`, {
      appId,
      sections: responseV1,
    });
    responseLog("", response);
    return response.data.app;
  } catch (error: any) {
    responseLog("", error.response);
  }
}

export async function editSections(data: {
  data: any;
  id: string;
  order: number;
}) {
  setTokenForAPI();

  try {
    const response = await http.patch(`${addresses.editSection}/${data.id}`, {
      data: data.data,
    });
    return responseLog("", response);
  } catch (error: any) {
    return responseLog("", error.response);
  }
}
