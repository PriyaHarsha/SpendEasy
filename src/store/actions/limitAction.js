import { getLimitFromStorage } from "../../components/localStorage";

export const addToLimit = (limitToBeAdded) => (dispatch) => {
  dispatch({ type: "ADD_TO_LIMIT", limitToBeAdded });
};

export const subtractFromLimit = (limitToBeSubtracted) => (dispatch) => {
  dispatch({ type: "SUBTRACT_FROM_LIMIT", limitToBeSubtracted });
};

export const resetLimit = (limitAmount) => (dispatch) => {
  dispatch({ type: "RESET_LIMIT", limitAmount });
};

export const initLimits = () => (dispatch) => {
  const limit = getLimitFromStorage("limit");
  dispatch({ type: "INIT_LIMIT", limit });
};

export const updateLimitLocalstorage = () => (dispatch) => {
  dispatch({ type: "UPDATE_LIMIT_STORAGE" });
};
