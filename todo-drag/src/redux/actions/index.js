export const ADD_TODO = "add_todo";
export const REMOVE_TODO = "remove_todo";
export const UPDATE_TODO = "update_todo";
export const PUSH_NOTIFICATION = "push_notification";
export const REMOVE_NOTIFICATION = "remove_notification";

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

export const pushNotification = (notification) => ({
  type: PUSH_NOTIFICATION,
  payload: notification,
});

export const removeNotification = () => ({
  type: REMOVE_NOTIFICATION,
});
