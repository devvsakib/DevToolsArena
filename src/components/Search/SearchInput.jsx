import React, { useEffect, useState } from "react";
import { MdSearch, MdClear, MdCancel, MdCancelPresentation } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import "./css/style.css";
import useWindowsize from "../../hooks/useWindowsize";
import { FaFilter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CheckCircleOutlined } from "@ant-design/icons";

const errorType = [
  "All",
  "push",
  "commit",
  "merge",
  "pull",
  "add",
  "branch",
  "cmd",
];

function SearchInput({ search, setSearch, setType }) {
  const [open, setOpen] = useState(false);
  const { width } = useWindowsize();
  const [scrolling, setScrolling] = useState(false);
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`flex mx-auto mt-12 justify-center items-center gap-4 py-3 px-6 rounded-lg md:w-5/6
      sticky top-0 z-40 transition-all ${scrolling && "backdrop-blur-[1.5rem] saturate-50"}`}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center border border-primary gap-4 py-2 px-6 rounded-lg w-11/12 md:w-4/6"
      >
        <MdSearch className="text-gray text-2xl" />
        <input
          type="text"
          id="searchbox"
          value={search}
          className="w-full text-sm md:text-base focus:outline-none placeholder:font-semibold bg-transparent custom-input"
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
      <div className={"" + selectedTag !== "All" && "text-green-400"}>
        <FaFilter
          onClick={e => setOpen(!open)}
          className={"text-xl !cursor-pointer"}
        />
      </div>
      {
        open &&
        <div className="h-dvh bg-dark fixed top-0 !-right-[0] w-[60vw] md:w-[40vw] px-5 z-[9999]">
          <RxCross2 onClick={e => setOpen(!open)} className="ml-auto mt-5 text-2xl cursor-pointer" />
          <ul
            className={`grid mx-auto items-start gap-4 py-3 px-6 rounded-lg w-full md:w-12/12  md:w-auto mt-20`}
          >
            {errorType.map((item, i) => (
              <li
                key={i}
                className={`w-full md:w-auto rounded-md capitalize text-white font-bold py-1 px-3 cursor-pointer flex items-center gap-5`}
                onClick={() => {
                  setSelectedTag(item);
                  setType(item);
                  setOpen(false)
                }}
              >
                {selectedTag && selectedTag == item && <CheckCircleOutlined className={`${item === "add"
                  ? "text-add"
                  : item === "commit"
                    ? "text-commit"
                    : item === "merge"
                      ? "text-merge"
                      : item === "push"
                        ? "text-push"
                        : item === "cmd"
                          ? "text-cmd"
                          : item === "branch"
                            ? "text-branch"
                            : "text-default"
                  } filter brightness-200`} />}
                {item}
              </li>
            ))}
          </ul>
        </div>
      }
    </div >
  );
}

export default SearchInput;
