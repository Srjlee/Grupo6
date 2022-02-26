export const ADD_TODO = "add_todo";
export const REMOVE_TODO = "remove_todo";
export const UPDATE_TODO = "update_todo";

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
