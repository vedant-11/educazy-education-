import React from 'react';
import axios from 'axios';

export const GetRequest = (url: String) => {
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

export const PostRequest = async (url: String, body: Map) => {
  var resp;
  console.log(body);
  resp = await axios.post(url, {
    body,
  });

  console.log(resp.data);

  return resp.data;
};
