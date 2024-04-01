import responseLog from "@/common/dataLog/dataLogResponse";
import http, { setTokenForAPI } from "./HTTP";
import addresses from "@/config/addresses/apiEndpoints";

export async function setImage(image: any) {
  setTokenForAPI();

  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await http.post(`${addresses.setImage}`, formData);
    responseLog("", response);
    return response.data.imageName;
  } catch (error: any) {
    responseLog("", error.response);
  }
}

export async function editImage(data: { imageName: string; imageFile: any }) {
  setTokenForAPI();

  try {
    const response = await http.post(
      `${addresses.setImage}/${data.imageName}`,
      {
        image: data.imageFile,
      }
    );
    return responseLog("", response);
  } catch (error: any) {
    return responseLog("", error.response);
  }
}
