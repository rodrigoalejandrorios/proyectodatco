import { useState, useEffect, useRef } from "react";
const axios = require("axios");
const BASE_URL = "http://localhost:8000";

const useGet = ({ url, initialState = [], ubic }) => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false);
  const [isFetching, setFeching] = useState(true);

  const getter = async () => {
    try {
      console.log(`${BASE_URL}${url}`);
      const { data } = await axios.get(`${BASE_URL}${url}`, {
        headers: { ubic: ubic },
      });
      setData(data);
      setFeching(false);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  useEffect(() => {
    getter();
  }, [url, ubic]);
  return [data, isFetching, setFeching, getter, error];
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
