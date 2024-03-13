"use server";

import axios from "axios";

// const API_URL = "http://localhost:7171/";
const API_URL = "https://hapi.herrguller.cc/";

export async function getProduct(reqData) {
  try {
    var config = {
      method: "get",
      url: API_URL + "get/product?id=" + reqData.ID,
      headers: {
        "Content-Type": "application/json",
      },
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

export async function getLandingProducts() {
  try {
    var config = {
      method: "get",
      url: API_URL + "get/landing/products",
      headers: {
        "Content-Type": "application/json",
      },
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

export async function getCategories() {
  try {
    var config = {
      method: "get",
      url: API_URL + "get/categories",
      headers: {
        "Content-Type": "application/json",
      },
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

export async function getBrands() {
  try {
    var config = {
      method: "get",
      url: API_URL + "get/brands",
      headers: {
        "Content-Type": "application/json",
      },
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

export async function getMaterials() {
  try {
    var config = {
      method: "get",
      url: API_URL + "get/materials",
      headers: {
        "Content-Type": "application/json",
      },
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

export async function getColors() {
  try {
    var config = {
      method: "get",
      url: API_URL + "get/colors",
      headers: {
        "Content-Type": "application/json",
      },
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
