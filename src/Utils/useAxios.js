import { useState, useEffect, useRef } from "react";
const axios = require("axios");
const BASE_URL = "http://localhost:8000";

const useGet = ({ url, initialState = [] }) => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false);
  const [isFetching, setFeching] = useState(true);

  const get = async () => {
    try {
      console.log(`${BASE_URL}${url}`);
      const { data } = await axios.get(`${BASE_URL}${url}`);
      setData(data);
      setFeching(false);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  useEffect(() => {
    get();
  }, [url]);
  return [data, isFetching, setFeching, get, error];
};

const usePost = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isFetching, setFeching] = useState(true);

  const post = async (url, object) => {
    try {
      const responseData = await axios.post(`${BASE_URL}/${url}`, object);
      setData(responseData);
      setFeching(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    post();
  }, []);

  return [post, data, isFetching];
};

export { useGet, usePost };
