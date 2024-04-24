// reducers.js
import { SET_SELECTED_OPTION } from "./actions";

const initialState = {
  selectedOption: "Dashboard", // Default selected option
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_OPTION:
      return {
        ...state,
        selectedOption: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
