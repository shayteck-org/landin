import responseLog from "@/common/dataLog/dataLogResponse";
import http, { setTokenForAPI } from "./HTTP";
import addresses from "@/config/addresses/apiEndpoints";

export async function makeGallery(name: string) {
  setTokenForAPI();

  try {
    const response = await http.post(`${addresses.makeGallery}`, name);
    responseLog("", response);
    return true;
  } catch (error: any) {
    responseLog("", error.response);
  }
}

export async function editGallery(data: { imageName: string; imageFile: any }) {
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

export async function deleteGallery(name: string) {
  setTokenForAPI();

  try {
    const response = await http.delete(`${addresses.makeGallery}/${name}`);
    return responseLog("", response);
  } catch (error: any) {
    return responseLog("", error.response);
  }
}

export async function getGallery(name: string) {
  setTokenForAPI();

  try {
    const response = await http.get(`${addresses.makeGallery}/${name}`);
    return response.data.images;
  } catch (error: any) {
    return responseLog("", error.response);
  }
}

export async function setImageForGallery(image: any, name: string) {
  setTokenForAPI();

  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await http.post(
      `${addresses.makeGallery}/${name}`,
      formData
    );
    responseLog("", response);
    return response.data.imageName;
  } catch (error: any) {
    responseLog("", error.response);
  }
}
