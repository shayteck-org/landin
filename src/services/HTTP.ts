import storageKeys from "@/config/storageKeys";
import { getData } from "@/config/utils/localStorage";
import axios from "axios";

export const BASE_URL = (axios.defaults.baseURL =
  import.meta.env.VITE_BASE_URL);

const http = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};

export function setTokenForAPI() {
  const token = getData(storageKeys.token) || false;
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default http;
