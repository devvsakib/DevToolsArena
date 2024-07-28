import React, { useState } from "react";
import useColorBorderBox from "../../hooks/useColorBorderBox";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ErrorType from "./ErrorType";
import "./css/style.css";

import ModalSolutions from "./ModalSolutions";

function ErrorCard({ error }) {
  const [readMore, setReadMore] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);
  const [solution, setSolution] = useState("");
  const { errorTypeColor } = useColorBorderBox(error.type);

  return (
    <div
      id="main-div"
      className={`py-4 mb-4 col-span-12 md:col-span-6 xl:col-span-4 px-2 md:px-6 border-l-4 rounded-lg items-start bg-dark/5 dark:bg-white/5 backdrop-blur-[10px] flex flex-col hover:scale-105 duration-300 border-[${errorTypeColor}]`}
    >
      <h3 className="title">{error.title}</h3>

      <ErrorType type={error.type} />

      <div className="bg-primary w-full h-[2px] my-4" />

      <div className="h-fit">
        <p className="text-sm text-zinc-700 dark:text-gray line-clamp-11 leading-relaxed">
          {readMore ? error.description : error.description.substring(0, 100)}
          {error.description.length > 100 ? (
            <button
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? "...show less" : "...show more"}{" "}
            </button>
          ) : (
            ""
          )}
        </p>
      </div>

      <button
        className="flex mt-8 items-center gap-2 px-3 py-2 border border-gray rounded-lg hover:border-primary hover:text-primary"
        onClick={() => setOpenModal((prev) => !prev)}
      >
        <span className="text-xs">Solution</span>
        <MdOutlineArrowRightAlt className="text-lg" />
      </button>
      <span>{solution}</span>

      {isOpenModal && (
        <ModalSolutions
          isOpen={isOpenModal}
          error={error}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
}

export default ErrorCard;
