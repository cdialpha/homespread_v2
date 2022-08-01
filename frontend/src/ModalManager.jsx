import React from "react";

import EditChefModal from "./components/profile_components/EditChefModal";
import AddRecipieModal from "./components/profile_components/AddRecipieModal";
import ModalThree from "./components/profile_components/ModalThree";

const ModalManager = ({ closeFn, modal = "" }) => {
  return (
    <>
      <EditChefModal closeFn={closeFn} open={modal === "modal-one"} />
      <AddRecipieModal closeFn={closeFn} open={modal === "modal-two"} />
      <ModalThree closeFn={closeFn} open={modal === "modal-three"} />
    </>
  );
};

export default ModalManager;
