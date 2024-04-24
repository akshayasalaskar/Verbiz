// actions.js
export const SET_SELECTED_OPTION = "SET_SELECTED_OPTION";

export const setSelectedOption = (option) => ({
  type: SET_SELECTED_OPTION,
  payload: option,
});
