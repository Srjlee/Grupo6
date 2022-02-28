import { nanoid } from "nanoid";
import {
  PUSH_NOTIFICATION,
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  REMOVE_NOTIFICATION,
  SHOW_TODO,
  SHOW_EDIT_TODO,
  SHOW_CREATE_TODO,
} from "@redux/actions";

const initialState = {
  todos: [],
  notifications: [],
  todo: "",
  showEditForm: false,
  showCreateForm: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      const todo = { id: nanoid(), ...payload, status: "todo" };
      return {
        ...state,
        todos: [...state.todos, todo],
        showCreateForm: false,
      };
    }

    case UPDATE_TODO: {
      return {
        ...state,
        showEditForm: false,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, ...payload.data } : todo
        ),
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

    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    }

    case SHOW_TODO: {
      return {
        ...state,
        todo: state.todos.find((todo) => todo.id === payload),
      };
    }

    case SHOW_CREATE_TODO: {
      return {
        ...state,
        showCreateForm: payload,
      };
    }

    case SHOW_EDIT_TODO: {
      return {
        ...state,
        todo: state.todos.find((todo) => todo.id === payload.id),
        showEditForm: payload.show,
      };
    }

    default:
      return state;
  }
};
export default reducer;
