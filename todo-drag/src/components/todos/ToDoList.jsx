import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PlusIcon } from "@heroicons/react/outline";
import { showCreateForm } from "@redux/actions";
import { useDispatch } from "react-redux";

import ToDoListItem from "@components/todos/ToDoListItem";
import Dropzone from "@components/draggable/Dropzone";

const ToDoList = ({ title, type, dragged, setDragged }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) =>
    state.todos.filter((todo) => todo.status === type)
  );
  const [todos, updateTodos] = useState(tasks);

  const setup = {
    todo: { titleBg: "bg-warning" },
    inProgress: { titleBg: "bg-info" },
    done: { titleBg: "bg-primary" },
  };

  useEffect(() => {
    if ((!todos.length && tasks.length) || todos.length !== tasks.length) {
      updateTodos(tasks);
    }

    if (tasks.length === todos.length) {
      let validate = tasks.filter(
        (task, index) =>
          task.title !== todos[index].title ||
          task.description !== todos[index].description
      );

      if (validate.length) {
        updateTodos(tasks);
      }
    }
  }, [tasks, todos]);

  useEffect(() => {
    updateTodos(tasks);
    return () => updateTodos([]);
  }, []);

  const displayCreateForm = () => {
    dispatch(showCreateForm(true));
  };

  return (
    <div className="card">
      <div
        className={`card-header  text-capitalize d-flex items-center justify-content-between text-light ${setup[type].titleBg}`}
      >
        {title}
        {type === "todo" ? (
          <PlusIcon
            onClick={displayCreateForm}
            className="mx-1 icon"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Agregar tarea"
          />
        ) : null}
      </div>
      <Dropzone type={type} dragged={dragged}>
        {todos.length ? (
          todos.map((toDo) => (
            <ToDoListItem toDo={toDo} setDragged={setDragged} key={toDo.id} />
          ))
        ) : (
          <li className="dropzone list-group-item bg-transparent">
            No existen tareas en esta lista
          </li>
        )}
      </Dropzone>
    </div>
  );
};

export default ToDoList;
