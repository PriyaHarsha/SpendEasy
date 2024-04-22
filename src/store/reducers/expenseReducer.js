import { saveToStorage } from "../../components/localStorage";

const initState = {
  expenses: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_EXPENSE": {
      return {
        ...state,
        expenses: [...state.expenses, action.expenseToBeAdded],
      };
    }

    case "INIT_EXPENSES": {
      return {
        expenses: action.expenses,
      };
    }

    case "UPDATE_STORAGE": {
      saveToStorage(state.expenses);
      return state;
    }
    case "DELETE_EXPENSE": {
      let index = state.expenses.findIndex(
        (item) => item.id == action.expenseId
      );
      console.log(index);

      if (index > -1) {
        return {
          ...state,
          expenses: state.expenses.filter(
            (item) => item.id != action.expenseId
          ),
        };
      } else {
        return state;
      }
    }

    default: {
      return state;
    }
  }
};
