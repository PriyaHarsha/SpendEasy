import { getFromStorage } from "../../components/localStorage";

export const addExpense = (expenseToBeAdded) => (dispatch) => {
  dispatch({ type: "ADD_TO_EXPENSE", expenseToBeAdded });
};

export const editExpense = (expenseId) => async (dispatch) => {
  dispatch({ type: "EXPENSE_DETAIL", expenseId });
};

export const initExpenses = () => (dispatch) => {
  const expenses = getFromStorage("expenses");

  dispatch({ type: "INIT_EXPENSES", expenses });
};

export const updateLocalstorage = () => (dispatch) => {
  dispatch({ type: "UPDATE_STORAGE" });
};

export const deleteExpense = (expenseId) => async (dispatch) => {
  dispatch({ type: "DELETE_EXPENSE", expenseId });
};
