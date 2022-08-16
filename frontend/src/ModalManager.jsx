import React from "react";

import EditChefModal from "./components/profile_components/EditChefModal";
import AddRecipieModal from "./components/profile_components/AddRecipieModal";
import UpdateRecipieModal from "./components/profile_components/UpdateRecipieModal";

const ModalManager = ({ closeFn, modal = "", payload }) => {
  return (
    <>
      <EditChefModal closeFn={closeFn} open={modal === "modal-one"} />
      <AddRecipieModal closeFn={closeFn} open={modal === "modal-two"} />
      <UpdateRecipieModal
        closeFn={closeFn}
        open={modal === "modal-three"}
        payload={payload}
      />
    </>
  );
};

export default ModalManager;
