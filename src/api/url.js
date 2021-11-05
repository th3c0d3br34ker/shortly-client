import { logger } from "../utils";
import instance from "../utils/axios";

export const createShortUrl = async (data) => {
  try {
    const response = await instance.post("/api/new", data);

    if (response.data.success) {
      return { ...response.data.data };
    } else {
      return { error: response.data.message };
    }
  } catch (error) {
    logger("Failed to create new Short URL.");
    logger(error);
    return { error: error.message };
  }
};

export const getShortUrl = async (id) => {
  try {
    const response = await instance.get(`/api/url/${id}`);

    if (response.data.success) {
      return { ...response.data.data };
    } else {
      return { error: response.data.message };
    }
  } catch (error) {
    logger("Failed to get Short URL.");
    logger(error);
    return { error: error.message };
  }
};

export const getAllShortUrls = async () => {
  try {
    const response = await instance.get("/api/all");

    if (response.data.success) {
      return { ...response.data };
    } else {
      return { error: response.data.message };
    }
  } catch (error) {
    logger("Failed to get all Short URLs.");
    logger(error);
    return { error: error.message };
  }
};

export const deleteShortUrl = async (id) => {
  try {
    const response = await instance.delete(`/api/${id}`);

    if (response.data.success) {
      return { ...response.data.data };
    } else {
      return { error: response.data.message };
    }
  } catch (error) {
    logger("Failed to delete Short URL.");
    logger(error);
    return { error: error.message };
  }
};
