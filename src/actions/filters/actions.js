"use server";

import axios from "axios";

// const API_URL = "http://localhost:7171/";
const API_URL = "https://hapi.herrguller.cc/";

export async function filterProducts(reqData) {
  try {
    var config = {
      method: "post",
      url: API_URL + "filter/products",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(reqData),
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
