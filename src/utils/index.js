import { getAllShortUrls } from "../api/url";

export * from "./config";
export * from "./axios";

export const logger = console.log;

export const fetchUrls = async ({ onSuccess, onError }) => {
  const response = await getAllShortUrls();

  if (response.error) {
    onError(response.error);
    return;
  }

  onSuccess(response.data);
};
