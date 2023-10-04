import React from "react";
import { MdKeyboardArrowLeft, MdContentCopy } from "react-icons/md";
import ErrorSolutions from "./ErrorSolutions";
import useColorBorderBox from "../../hooks/useColorBorderBox";
import ErrorType from "./ErrorType";
import Modal from "react-modal";
import toast from "react-hot-toast";

Modal.setAppElement("#root");

const ModalSolutions = ({ isOpen, setOpenModal, error }) => {
  const colorBorderBox = useColorBorderBox(error);

    return (
      <div
      onClick={
        () => {
          setOpenModal((prev) => !prev);
      }
      }
      >
      <Modal
        isOpen={isOpen}
        onRequestClose={setOpenModal}
        contentLabel="Modal solution"
        className={colorBorderBox + " modal"}
        id="main-div"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0 ,0, .6)",
          },
          content: {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            padding: "30px",
          },
        }}
      >
        <h3 className="title">{error.title}</h3>

        <ErrorType type={error.type} />

        <div className="bg-primary w-full h-[2px] my-4" />

        <ErrorSolutions solutions={error.solutions} />

        <div className="bg-primary w-full h-[2px] my-4" />
        <div className="flex flex-row">
          <button
            className="flex mt-8 items-center gap-2 px-3 py-2 border border-gray rounded-lg hover:border-primary hover:text-primary"
            onClick={() => setOpenModal((prev) => !prev)}
          >
            <MdKeyboardArrowLeft className="text-lg" />
            <span className="text-xs">Back</span>
          </button>
          <button
            className="flex mt-8 items-center gap-2 mx-4 px-3 py-2 border border-gray rounded-lg hover:border-primary hover:text-primary"
            onClick={() => {
              toast.success("Commands copied to clipboard");
              navigator.clipboard.writeText(
                error.solutions.split("<").join(" ")
              );
            }}
          >
            <MdContentCopy className="text-lg" />
            <span className="text-xs">Copy</span>
          </button>
        </div>
      </Modal>
      </div>
    );
};

export default ModalSolutions;
