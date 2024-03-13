import config from "../config";
import storageKeys from "../config/storageKeys";
import { getData } from "../config/utils/localStorage";

const customFetcher = (url: string, init?: RequestInit | undefined) => {
  const token = getData(storageKeys.token);
  const controller = new AbortController();
  return fetch(`${config.apiUrl}${url}`, {
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "*",
      ...(token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {}),
    },
    ...init,
  });
};
export default customFetcher;
