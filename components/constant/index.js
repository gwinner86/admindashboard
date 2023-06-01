import axios from "axios";

//const credentials = btoa("sendbast-api" + ":" + "x8Hjev-rexxc5-vykvej");
const credentials = Buffer.from(
  "sendbast-api" + ":" + "x8Hjev-rexxc5-vykvej"
).toString("base64");

let basicAuth = "Basic " + credentials;
const initialData = {
  access:
    typeof window !== "undefined"
      ? JSON.parse(window.sessionStorage.getItem("UserData"))
      : false,
};
console.log(" Initial Data : ", initialData);
const userData = initialData;
const token = userData?.token;

const URL = "https://app.sendbast.com";
const ServerError = "Unable to access the network. Kindly try again later";

const axiosInstanceForBasicAuth = axios.create({
  baseURL: URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Authorization ": basicAuth,
  },
});

const axiosInstanceForBearer = axios.create({
  baseURL: URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Authorization ": "Bearer " + token,
  },
});

export default {
  BasicAxios: axiosInstanceForBasicAuth,
  BearerAxios: axiosInstanceForBearer,
  URL: URL,
};
