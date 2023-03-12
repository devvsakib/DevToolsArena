import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdOutlineArrowRightAlt } from "react-icons/md";
import ErrorSolutions from "./ErrorSolutions";
import ErrorType from "./ErrorType";
import './css/style.css';

function ErrorCard({ error }) {
  
  const [showSolution, setShowSolution] = useState(false);
  const [errorTypeColor, setErrorTypeColor] = useState('#7e1aa5');
  const [readMore,setReadMore]=useState(false);
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
  }, [errorTypeColor])
  let item = error.type;

  return (
    <div
    id="main-div"
      className={`py-4 mb-4 col-span-12 md:col-span-6 xl:col-span-4 px-2 md:px-6 border-l-4 rounded-lg   items-start bg-white/5 backdrop-blur-[10px] flex flex-col hover:scale-105 duration-300 ${item === "add"
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
        }`}
    >
      <h3 className="title">{error.title}</h3>

      <ErrorType type={error.type} />

      <div className="bg-primary w-full h-[2px] my-4" />

      {showSolution ? (
        <ErrorSolutions solutions={error.solutions} />
      ) : (
        <div className="h-fit">
        <p className="text-sm text-gray line-clamp-11 leading-relaxed">
          {readMore ? error.description : error.description.substring(0,100)}
          {error.description.length > 100 ?<button onClick={()=>{setReadMore(!readMore)}}>{readMore ? '...show less': '...show more'} </button>:''}
        </p>
        
        </div>
      )}

      <button
        className="flex mt-8 items-center gap-2 px-3 py-2 border border-gray rounded-lg hover:border-primary hover:text-primary"
        onClick={() => setShowSolution((prev) => !prev)}
      >
        {showSolution ? (
          <>
            <MdKeyboardArrowLeft className="text-lg" />
            <span className="text-xs">Back</span>
          </>
        ) : (
          <>
            <span className="text-xs">Solution</span>
            <MdOutlineArrowRightAlt className="text-lg" />
          </>
        )}
      </button>
    </div>
  );
}

export default ErrorCard;
