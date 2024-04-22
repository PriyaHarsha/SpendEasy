import { saveCreditToStorage } from "../../components/localStorage";

const initialState = {
  credits: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CREDITS": {
      return {
        ...state,
        credits: [...state.credits, action.creditToBeAdded],
      };
    }
    case "INIT_CREDITS": {
      return {
        credits: action.credits,
      };
    }

    case "UPDATE_CREDIT_STORAGE": {
      saveCreditToStorage(state.credits);
      return state;
    }

    case "DELETE_CREDIT": {
      let index = state.credits.findIndex((item) => item.id == action.creditId);

      if (index > -1) {
        return {
          ...state,
          credits: state.credits.filter((item) => item.id != action.creditId),
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
