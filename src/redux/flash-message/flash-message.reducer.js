import FlashMessageActionTypes from "./flash-message.types";

const initialValue = { message: "", category: "" };

const flashMessageReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FlashMessageActionTypes.ADD_MESSAGE:
      return { ...action.payload };
    case FlashMessageActionTypes.REMOVE_MESSAGE:
      return initialValue;
    default:
      return state;
  }
};

export default flashMessageReducer;
