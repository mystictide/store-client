"use server";

import axios from "axios";
import { getAccessToken } from "../auth/actions";

// const API_URL = "http://localhost:7171/";
const API_URL = "https://hapi.herrguller.cc/";

export async function manageExample(reqData) {
  try {
    const accessToken = await getAccessToken();
    var config = {
      method: "post",
      url: API_URL + "manage/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      data: reqData,
    };
    var result = await axios(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        if (error?.response) {
          return error?.response?.data;
        } else {
          throw "Server error.";
        }
      });
    return result;
  } catch (error) {
    return error;
  }
}
