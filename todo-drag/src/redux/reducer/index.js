import { ADD_TODO, REMOVE_TODO } from "../actions";
const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {      
      return [...state, payload];
    }
    case REMOVE_TODO: {
      return [...state, state.filter((todo) => todo !== payload)];
    }
    default:
      return state;
  }
};
export default reducer;
