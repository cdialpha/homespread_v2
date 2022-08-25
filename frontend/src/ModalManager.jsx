import React from "react";

// Modals
import EditChefModal from "./components/profile_components/EditChefModal";
import AddRecipieModal from "./components/profile_components/AddRecipieModal";
import UpdateRecipieModal from "./components/profile_components/UpdateRecipieModal";
import DeleteModal from "./components/profile_components/DeleteModal";
import FilterModal from "./components/order_components/FilterModal";
import ComingSoonModal from "./components/ComingSoonModal";

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
      <DeleteModal
        closeFn={closeFn}
        open={modal === "modal-four"}
        payload={payload}
      />
      <FilterModal closeFn={closeFn} open={modal === "modal-five"} />
      <ComingSoonModal closeFn={closeFn} open={modal === "modal-six"} />
    </>
  );
};

export default ModalManager;
