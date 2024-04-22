import { getCreditFromStorage } from "../../components/localStorage";

export const addCredits = (creditToBeAdded) => (dispatch) => {
  console.log(creditToBeAdded);
  dispatch({ type: "ADD_TO_CREDITS", creditToBeAdded });
};

export const creditsDetails = (creditId) => (dispatch) => {
  dispatch({ type: "Credit_DETAIL", creditId });
};

export const initCredits = () => (dispatch) => {
  const credits = getCreditFromStorage("credits");
  dispatch({ type: "INIT_CREDITS", credits });
};

export const updateCreditLocalstorage = () => (dispatch) => {
  dispatch({ type: "UPDATE_CREDIT_STORAGE" });
};

export const deleteCredit = (creditId) => async (dispatch) => {
  dispatch({ type: "DELETE_CREDIT", creditId });
};
