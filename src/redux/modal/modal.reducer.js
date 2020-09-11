import ModalActionTypes from "./modal.types";

const initialState = false;

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ModalActionTypes.OPEN_MODAL:
      return true;
    case ModalActionTypes.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};

export default modalReducer;
