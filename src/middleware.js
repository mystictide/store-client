import { NextResponse } from "next/server";

// const API_URL = "http://localhost:7171/auth/refresh/token";
const API_URL = "https://hapi.herrguller.cc/auth/refresh/token";

export async function middleware(request) {
  const response = NextResponse.next();
  var client = request.cookies.get("client")?.value;
  if (client) {
    var access_token = request.cookies.get("access_token")?.value;
    if (!access_token) {
      var refresh_token = request.cookies.get("refresh_token")?.value;
      var newTokens = await refreshToken(refresh_token);
      if (newTokens) {
        response.cookies.set("access_token", newTokens.AccessToken, {
          expires: setExpirationDate(1),
          httpOnly: true,
        });
        if (!refresh_token) {
          response.cookies.set("refresh_token", newTokens.RefreshToken, {
            expires: setExpirationDate(89),
            httpOnly: true,
          });
        }
      }
    }
  }
  return response;
}

async function refreshToken(reqData) {
  try {
    var result = await fetch(API_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqData),
    })
      .then((response) => response.json())
      .then((data) => {
        let user = data;
        if (!user) {
          cookies().delete("client");
          cookies().delete("access_token");
          cookies().delete("refresh_token");
        } else {
          return data;
        }
      })
      .catch((error) => {
        console.error(error);
      });
    return result;
  } catch (error) {
    return error;
  }
}

function setExpirationDate(days) {
  var date = new Date(Date.now());
  date.setDate(date.getDate() + days);
  return date;
}
