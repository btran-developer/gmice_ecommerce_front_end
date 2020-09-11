import ModalActionTypes from "./modal.types";

export const openModal = () => ({
  type: ModalActionTypes.OPEN_MODAL
});

export const closeModal = () => ({
  type: ModalActionTypes.CLOSE_MODAL
});
