import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdSearch, MdClear } from "react-icons/md";

import useWindowsize from "../../hooks/useWindowsize";
import "./css/style.css";

const errorType = ["All", "push", "commit", "merge", "pull", "add", "branch"];

const fadeInVariant = {
  hidden: {
    x: -100,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", type: "tween" },
  },
};

function SearchInput({ search, setSearch, setType }) {
  const [open, setOpen] = useState(true);
  const { width } = useWindowsize();

  return (
    <div className="flex flex-col mx-auto mt-12 items-center gap-4 py-3 px-6 rounded-lg w-11/12 md:w-5/6">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex mx-auto mt-12 items-center gap-4 py-3 px-6 rounded-lg bg-white w-11/12 md:w-5/6"
      >
        <MdSearch className="text-gray text-2xl" />
        <input
          type="text"
          id="searchbox"
          value={search}
          className="w-full text-sm md:text-base focus:outline-none placholder:font-semibold text-dark bg-transparent"
          placeholder="Search for errors"
          onChange={(e) => {
            setSearch(e.target.value);
            setType("");
          }}
        />
        <button
          className={`focus:outline-none ${!search ? "hidden" : "block"}`}
          onClick={() => setSearch("")}
        >
          <MdClear className="text-gray text-xl" />
        </button>
      </form>
      <div className="types mt-4">
        {width > 768 ? (
          <ul
            className={`flex flex-col sm:flex-row mx-auto mt-2 items-start gap-4 py-3 px-6 rounded-lg bg-white w-full md:w-12/12  md:w-auto`}
          >
            {errorType.map((item, i) => (
              <li
                key={i}
                className={`${
                  item === "add"
                    ? "bg-[#4024e0]"
                    : item === "commit"
                    ? "bg-[#1a5ba5]"
                    : item === "merge"
                    ? "bg-[#118d7c]"
                    : item === "push"
                    ? "bg-[#8d54e1]"
                    : item === "branch"
                    ? "bg-[#40E4F0]"
                    : "bg-[#7e1aa5]"
                }
                w-full md:w-auto rounded-md text-white font-bold py-1 px-3 cursor-pointer`}
                onClick={() => setType(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center">
            <button
              className="bg-white py-3 pt-4 px-6 rounded-lg text-left text-black font-bold"
              onClick={() => setOpen(!open)}
            >
              Filter By Type
            </button>
            <AnimatePresence>
              {!open && (
                <motion.ul
                  variants={fadeInVariant}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className={`flex flex-col sm:flex-row mx-auto mt-2 items-start gap-4 py-3 pt-4 px-6 rounded-lg bg-white backdrop-blur-md w-[60vw] md:w-auto text-left `}
                >
                  {errorType.map((item, i) => (
                    <li
                      key={i}
                      className={`${
                        item === "add"
                          ? "bg-[#4024e0]"
                          : item === "commit"
                          ? "bg-[#1a5ba5]"
                          : item === "merge"
                          ? "bg-[#118d7c]"
                          : item === "push"
                          ? "bg-[#8d54e1]"
                          : item === "branch"
                          ? "bg-[#40E4F0]"
                          : "bg-[#7e1aa5]"
                      } w-full md:w-auto rounded-md text-white font-bold py-2 px-3 cursor-pointer`}
                      onClick={() => {
                        setType(item);
                        setOpen(!open);
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
