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
  const { borderColor } = useColorBorderBox(error);

  return (
    <div id="main-div" className={borderColor + " relative"}>
      <h3 className="title">{error.title}</h3>
      <div className="absolute h-full -right-2 -top-2">
        <ErrorType type={error.type} />
      </div>

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
        className="flex mt-2 items-center gap-2 px-3 py-2 border border-black dark:border-white rounded-lg hover:border-primary hover:text-primary"
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
