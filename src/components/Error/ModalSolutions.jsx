import React, { useContext } from "react";
import { MdKeyboardArrowLeft, MdContentCopy } from "react-icons/md";
import ErrorSolutions from "./ErrorSolutions";
import useColorBorderBox from "../../hooks/useColorBorderBox";
import ErrorType from "./ErrorType";
import Modal from "react-modal";
import toast from "react-hot-toast";
import { ThemeContext } from '../../context/ThemeContext';

Modal.setAppElement("#root");

const ModalSolutions = ({ isOpen, setOpenModal, error }) => {
  const { borderColor } = useColorBorderBox(error)
  const { theme } = useContext(ThemeContext);
  const overlayBackgroundColor = theme === 'dark'
    ? 'rgba(0, 0, 0, .5)'
    : 'rgba(0, 0, 0, 0.2)';

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={
        () => setOpenModal((prev) => !prev)
      }
      contentLabel="Modal solution"
      className={borderColor + " modal !bg-black/80 max-h-[90vh] "}
      id="main-div"
      style={{
        overlay: {
          backgroundColor: overlayBackgroundColor,
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
  );
};

export default ModalSolutions;
