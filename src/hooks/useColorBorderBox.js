import { useState, useEffect } from "react";

const useColorBorderBox = (error = "") => {
    const [errorTypeColor, setErrorTypeColor] = useState("#7e1aa5");
    
    useEffect(() => {
        if (error.type == "add") {
          return setErrorTypeColor("#4024e0");
        }
        if (error.type == "branch") {
          return setErrorTypeColor("#40e4f0");
        }
        if (error.type == "push") {
          return setErrorTypeColor("#8d54e1");
        }
        if (error.type == "merge") {
          return setErrorTypeColor("#118d7c");
        }
        if (error.type == "commit") {
          return setErrorTypeColor("#1a5ba5");
        }
        return setErrorTypeColor("#7e1aa5");
      }, [errorTypeColor]);

      let item = error.type;

      let response = `py-4 mb-4 col-span-12 md:col-span-6 xl:col-span-4 px-2 md:px-6 border-l-4 rounded-lg   items-start bg-dark/5 dark:bg-white/5 backdrop-blur-[10px] flex flex-col hover:scale-105 duration-300 ${
        item === "add"
          ? "border-[#4024e0]"
          : item === "commit"
          ? "border-[#1a5ba5]"
          : item === "merge"
          ? "border-[#118d7c]"
          : item === "push"
          ? "border-[#8d54e1]"
          : item === "cmd"
          ? "border-[#e100ff]"
          : item === "branch"
          ? "border-[#40E4F0]"
          : "border-[#7e1aa5]"
      }`

    return response
}

export default useColorBorderBox;