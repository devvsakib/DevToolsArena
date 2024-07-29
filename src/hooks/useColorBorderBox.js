import { useState, useEffect } from "react";

const useColorBorderBox = (errorType = "") => {
  const [errorTypeColor, setErrorTypeColor] = useState("#7e1aa5");

  useEffect(() => {
    if (errorType == "add") {
      return setErrorTypeColor("#4024e0");
    }
    if (errorType == "branch") {
      return setErrorTypeColor("#099104");
    }
    if (errorType == "push") {
      return setErrorTypeColor("#8d54e1");
    }
    if (errorType == "merge") {
      return setErrorTypeColor("#118d7c");
    }
    if (errorType == "commit") {
      return setErrorTypeColor("#1a5ba5");
    }
    return setErrorTypeColor("#7e1aa5");
  }, [errorType]);


  return { errorTypeColor, setErrorTypeColor };
}

export default useColorBorderBox;