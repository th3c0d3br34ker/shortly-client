import { getAllShortUrls } from "../api/url";

export const logger = console.log;

export const fetchUrls = async ({ onSuccess, onError }) => {
  const response = await getAllShortUrls();

  if (response.error) {
    onError(response.error);
    return;
  }

  console.log(response.data);

  onSuccess(response.data);
};
