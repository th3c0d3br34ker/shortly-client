import axios from "axios";
import { API_URI } from "./config";

const instance = axios.create({
  baseURL: API_URI,
  validateStatus: function (status) {
    return status < 500; // Resolve only if the status code is less than 500
  },
});

export default instance;
