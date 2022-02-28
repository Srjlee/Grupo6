export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const PUSH_NOTIFICATION = "PUSH_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";
export const SHOW_TODO = "SHOW_TODO";

export const addTodo = (toDo) => ({
  type: ADD_TODO,
  payload: toDo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const updateTodo = (id, todo) => ({
  type: UPDATE_TODO,
  payload: {
    id: id,
    data: todo,
  },
});

export const showTodo = (id) => ({
  type: SHOW_TODO,
  payload: id,
});

export const pushNotification = (notification) => ({
  type: PUSH_NOTIFICATION,
  payload: notification,
});

export const removeNotification = () => ({
  type: REMOVE_NOTIFICATION,
});


