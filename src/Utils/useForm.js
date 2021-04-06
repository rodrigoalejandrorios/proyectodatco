import { useState } from "react";

const useCustomForm = () => {
  const [state, setState] = useState({});
  const handleAccess = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return [state, handleAccess, setState];
};

export default useCustomForm;
