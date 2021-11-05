import axios from "axios";
import { API_URI } from "./config";

const instance = axios.create({
  baseURL: API_URI,
});

export default instance;
