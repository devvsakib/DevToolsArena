import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdOutlineArrowRightAlt } from "react-icons/md";
import ErrorSolutions from "./ErrorSolutions";
import ErrorType from "./ErrorType";

function ErrorCard({ error }) {
  const [showSolution, setShowSolution] = useState(false);
  const [errorTypeColor, setErrorTypeColor] = useState('#7e1aa5');
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


  return (
    <div
    className="py-4 mb-4 col-span-12 md:col-span-6 xl:col-span-4 px-2 md:px-6 border-l-4 rounded-lg   items-start bg-dark-secondary flex flex-col"
      style={{
        borderColor: errorTypeColor,
      }}
    >
      <h3 className="text-lg font-medium">{error.title}</h3>

      <ErrorType type={error.type} />

      <div className="bg-primary w-full h-[2px] my-4" />

      {showSolution ? (
        <ErrorSolutions solutions={error.solutions} />
      ) : (
        <p className="text-sm text-gray line-clamp-3 leading-relaxed">
          {error.description}
        </p>
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
