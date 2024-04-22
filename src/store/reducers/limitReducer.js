import { saveLimitToStorage } from "../../components/localStorage";

const initialState = {
  limit: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIMIT": {
      return {
        limit: parseInt(state.limit) + parseInt(action.limitToBeAdded),
      };
    }
    case "SUBTRACT_FROM_LIMIT": {
      console.log(parseInt(action.limitToBeSubtracted));
      return {
        limit: parseInt(state.limit) - parseInt(action.limitToBeSubtracted),
      };
    }

    case "RESET_LIMIT": {
      return {
        limit: action.limitAmount,
      };
    }

    case "UPDATE_LIMIT_STORAGE": {
      saveLimitToStorage(parseInt(state.limit));
      return state;
    }

    case "INIT_LIMIT": {
      return {
        ...state,
        limit: action.limit,
      };
    }
    default: {
      return state;
    }
  }
};
