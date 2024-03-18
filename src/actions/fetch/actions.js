"use server";

import axios from "axios";
import { getAccessToken } from "../auth/actions";

// const API_URL = "http://localhost:7171/";
const API_URL = "https://hapi.herrguller.cc/";

export async function getProduct(reqData) {
  try {
    var config = {
      method: "get",
      url: API_URL + "get/product?name=" + reqData,
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

export async function getCart() {
  try {
    const accessToken = await getAccessToken();
    var config = {
      method: "get",
      url: API_URL + "get/user/cart",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    var result = await axios(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        if (error?.response) {
          return null;
        } else {
          throw "Server error.";
        }
      });
    return result;
  } catch (error) {
    return error;
  }
}
