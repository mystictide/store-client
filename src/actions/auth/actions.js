"use server";

import { readCookie, setExpirationDate } from "@/assets/js/helpers";
import axios from "axios";
import { cookies } from "next/headers";

// const API_URL = "http://localhost:7171/";
const API_URL = "https://hapi.herrguller.cc/";

export async function register(reqData) {
  try {
    var config = {
      method: "post",
      url: API_URL + "auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(reqData),
    };
    var result = await axios(config)
      .then(function (response) {
        let user = response.data;
        cookies().set("client", JSON.stringify(user.Client), {
          expires: setExpirationDate(89),
        });
        cookies().set("access_token", user.AccessToken, {
          expires: setExpirationDate(1),
          httpOnly: true,
        });
        cookies().set("refresh_token", user.RefreshToken, {
          expires: setExpirationDate(89),
          httpOnly: true,
        });
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

export async function login(reqData) {
  try {
    var config = {
      method: "post",
      url: API_URL + "auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(reqData),
    };
    var result = await axios(config)
      .then(function (response) {
        let user = response.data;
        cookies().set("client", JSON.stringify(user.Client), {
          expires: setExpirationDate(89),
        });
        cookies().set("access_token", user.AccessToken, {
          expires: setExpirationDate(1),
          httpOnly: true,
        });
        cookies().set("refresh_token", user.RefreshToken, {
          expires: setExpirationDate(89),
          httpOnly: true,
        });
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

export async function logout() {
  cookies().delete("client");
  cookies().delete("access_token");
  cookies().delete("refresh_token");
  return true;
}

export async function checkExistingEmail(reqData) {
  try {
    var config = {
      method: "post",
      url: API_URL + "auth/cmail",
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

export async function getAccessToken() {
  try {
    const cookieStore = cookies();
    return readCookie(cookieStore, "access_token", true);
  } catch (error) {
    return error;
  }
}
