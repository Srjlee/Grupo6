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
  LOAD_LOCAL_STORAGE
} from "@redux/actions";

const initialState = {
  todos: [],
  notifications: [],
  todo: {},
  showEditForm: false,
  showCreateForm: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      const todo = { id: nanoid(), ...payload, status: "todo" };
      const todos = [...state.todos, todo];
      localStorage.setItem("toDos", JSON.stringify(todos));
      return {
        ...state,
        todos: todos,
      };
    }

    case UPDATE_TODO: {
      const todos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, ...payload.data } : todo
      );
      localStorage.setItem("toDos", JSON.stringify(todos));
      return {
        ...state,
        showEditForm: false,
        todos: todos,
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
      const todos = state.todos.filter((todo) => todo.id !== payload);
      localStorage.setItem("toDos", JSON.stringify(todos));
      return {
        ...state,
        todos: todos,
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
      const toDo = state.todos.find((todo) => todo.id === payload.id);
      return {
        ...state,
        todo: toDo !== undefined ? toDo : {},
        showEditForm: payload.show,
      };
    }

    case LOAD_LOCAL_STORAGE: {
      return {
        ...state,
        todos: payload,
      };
    }

    default:
      return state;
  }
};
export default reducer;
