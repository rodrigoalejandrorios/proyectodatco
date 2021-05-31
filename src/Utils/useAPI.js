import { useState, useEffect } from "react";
const axios = require("axios");
const BASE_URL = "http://localhost:8000/";

const useGetuser = () => {
  const [user, setUser] = useState([]);
  const [fetch, setFetch] = useEffect(true);
  const getter = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}users`);
      setUser(data);
      setFetch(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getter();
  }, []);
  return [user, fetch];
};

const usePostuser = async ({ url, object }) => {
  // const [post, setPost] = useState([]);
  // const [fetching, setFetching] = useEffect(true);
  try {
    const { data } = await axios.post(url, object);
    console.log(data);
    // setPost(data);
    // setFetching(false);
  } catch (e) {
    console.log(e);
  }
  useGetuser();
};

export { useGetuser, usePostuser };
