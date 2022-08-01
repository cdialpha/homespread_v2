import ReactDOM from "react-dom";

const modalRootEl = document.getElementById("portal");

const ModalShell = ({ children, open = false }) => {
  if (!open) return null;

  return ReactDOM.createPortal(children, modalRootEl);
};

export default ModalShell;
