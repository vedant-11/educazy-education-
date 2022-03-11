import React from 'react';

export const getRequest = (url: String) => {
  var resp;
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      resp = response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return resp;
};

export const postRequest = (url: String, body: Map) => {
  var resp;
  axios
    .post(url, {
      body,
    })
    .then(function (response) {
      console.log(response);
      resp = response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return resp;
};
