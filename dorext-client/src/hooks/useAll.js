import { useContext } from "react";
import { AllContext } from "../context/AuthProvider";

const useAll = () => {
  return useContext(AllContext);
};

export default useAll;
