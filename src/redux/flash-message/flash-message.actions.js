import FlashMessageActionTypes from "./flash-message.types";

export const addMessage = content => ({
  type: FlashMessageActionTypes.ADD_MESSAGE,
  payload: content
});

export const removeMessage = () => ({
  type: FlashMessageActionTypes.REMOVE_MESSAGE
});
