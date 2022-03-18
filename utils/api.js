import axios from "axios";
import { setCookie } from "nookies";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const signupUser = async (payload) => {
  try {
    delete payload.confirmPassword;
    const res = await instance.post("/user/register", payload);

    if (!res.data.success) {
      handleError(res.data.message);
      return;
    }
    toast.success(res.data.message);
    return res.data;
  } catch (err) {
    console.log(err);
    handleError(err.error);
  }
};

export const loginUser = async (payload) => {
  try {
    const res = await instance.post("/user/login", payload);

    if (!res.data.success) {
      handleError(res.data.message);
      return;
    }
    setCookie(null, "accessToken", res.data.key);
    return res.data;
  } catch (err) {
    console.log(err);
    handleError(err.error);
  }
};

export const getTest = async (accessToken) => {
  try {
    const res = await instance.get("/test/get-all-test", {
      headers: { authorization: `key ${accessToken}` },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    handleError(err.error);
  }
};

export const getQuestions = async (payload, accessToken) => {
  try {
    const res = await instance.get(`/test/get-all-questions/${payload}`, {
      headers: { authorization: `key ${accessToken}` },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    handleError(err.error);
  }
};

export const getScores = async (name, payload, accessToken) => {
  try {
    const res = await instance.post(`/test/get-score/${name}`, payload, {
      headers: { authorization: `key ${accessToken}` },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    handleError(err.error);
  }
};

export const getOneScore = async (name, accessToken) => {
  try {
    const res = await instance.get(`/test/get-one-score/${name}`, {
      headers: { authorization: `key ${accessToken}` },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    handleError(err.error);
  }
};

export const updateTest = async (name, payload, accessToken) => {
  try {
    const res = await instance.put(
      `/test/update-test-details/${name}`,
      payload,
      {
        headers: { authorization: `key ${accessToken}` },
      },
    );
    return res.data;
  } catch (err) {
    console.log(err);
    handleError(err.error);
  }
};

export const getUserDetails = async (accessToken) => {
  try {
    const res = await instance.get(`/user/details`, {
      headers: { authorization: `key ${accessToken}` },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    handleError(err.error);
  }
};

function handleError(message) {
  //handle error
}
