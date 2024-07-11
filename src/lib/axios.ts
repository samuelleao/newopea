import axios from "axios";

export const api = axios.create({
  baseURL: "https://portal-prod-api-portfolio-bff.azurewebsites.net/v1/api",
});