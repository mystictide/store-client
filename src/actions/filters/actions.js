"use server";

import axios from "axios";
import { getAccessToken } from "../auth/actions";

// const API_URL = "http://localhost:7171/";
const API_URL = "https://hapi.herrguller.cc/";

export async function filterCategories(reqData) {
  try {
    const accessToken = await getAccessToken();
    var config = {
      method: "post",
      url: API_URL + "filter/categories",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
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

export async function filterProducts(reqData) {
  try {
    const accessToken = await getAccessToken();
    var config = {
      method: "post",
      url: API_URL + "filter/products",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
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

export async function filterCustomers(reqData) {
  try {
    const accessToken = await getAccessToken();
    var config = {
      method: "post",
      url: API_URL + "filter/customers",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
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

export async function filterBrands(reqData) {
  try {
    const accessToken = await getAccessToken();
    var config = {
      method: "post",
      url: API_URL + "filter/brands",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
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

export async function filterMaterials(reqData) {
  try {
    const accessToken = await getAccessToken();
    var config = {
      method: "post",
      url: API_URL + "filter/materials",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
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
