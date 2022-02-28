import { nanoid } from "nanoid";
import {
  PUSH_NOTIFICATION,
  ADD_TODO,
  REMOVE_TODO,
  REMOVE_NOTIFICATION,
} from "../actions";

const initialState = {
  todos: [],
  notifications: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      const todo = { id: nanoid(), ...payload, status: "todo" };
      return {
        ...state,
        todos: [...state.todos, todo],
      };
    }

    case PUSH_NOTIFICATION: {
      const notification = { id: nanoid(), ...payload };
      return {
        ...state,
        notifications: [...state.notifications, notification],
      };
    }

    case REMOVE_NOTIFICATION: {
      return {
        ...state,
        notifications: state.notifications.slice(1),
      };
    }

    /*  case REMOVE_TODO: {
      return [...state, state.filter((todo) => todo !== payload)];
    } */
    default:
      return state;
  }
};
export default reducer;
