import ReactModal from "react-modal";

ReactModal.setAppElement("#__next");

const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
      className="bg-stone-100 rounded-lg "
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
