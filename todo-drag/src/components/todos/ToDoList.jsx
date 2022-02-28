import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  DocumentRemoveIcon,
  EyeIcon,
  PencilIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../redux/actions";
import { Tooltip } from "bootstrap";

const ToDoList = ({ title, type, toggle, setDragged, dragged }) => {
  const tasks = useSelector((state) =>
    state.todos.filter((todo) => todo.status === type)
  );
  const [todos, updateTodos] = useState(tasks);
  const dispatch = useDispatch();

  const setup = {
    todo: { titleBg: "bg-warning" },
    inProgress: { titleBg: "bg-info" },
    done: { titleBg: "bg-primary" },
  };

  useEffect(() => {
    if (tasks.length !== todos.length) {
      updateTodos(tasks);
    }
  }, [tasks, todos]);

  useEffect(() => {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);

  const dragStart = (e) => {
    setDragged({
      id: e.target.id,
      type,
    });
  };

  const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const ele = e.target;
    if (
      ele.classList.contains("dropzone") &&
      ele.parentNode.id !== dragged.type
    ) {
      ele.parentNode.classList.add("opacity-25");
    }
  };

  const onDragEnter = (e) => {
    const ele = e.target;
    if (
      ele.classList.contains("dropzone") &&
      ele.parentNode.id !== dragged.type
    ) {
      ele.parentNode.classList.add("opacity-25");
    }
  };

  const onDragLeave = (e) => {
    const ele = e.target;
    if (
      ele.classList.contains("dropzone") &&
      ele.parentNode.id !== dragged.type
    ) {
      ele.parentNode.classList.remove("opacity-25");
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    const ele = e.target;
    dispatch(updateTodo(dragged.id, { status: type }));
    ele.parentNode.classList.remove("opacity-25");
  };

  return (
    <div className="card">
      <div
        className={`card-header  text-capitalize d-flex items-center justify-content-between text-light ${setup[type].titleBg}`}
      >
        {title}
        {type === "todo" ? (
          <PlusIcon
            onClick={toggle}
            className="mx-1 icon"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Agregar tarea"
          />
        ) : null}
      </div>
      <ul
        id={type}
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className="list-group list-group-flush"
      >
        {todos.length ? (
          todos.map(({ id, task }) => (
            <li
              className="dropzone list-group-item list-group-item-action "
              key={id}
            >
              <a
                id={id}
                href="#!"
                onDragStart={dragStart}
                className="d-flex list-group-item aling-items-center justify-content-between cursor-move"
              >
                {task}
                <span>
                  <EyeIcon
                    className="mx-1 icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Ver"
                  />
                  <PencilIcon
                    className="mx-1 icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Editar"
                  />
                  <DocumentRemoveIcon
                    className="mx-1 icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Eliminar"
                  />
                </span>
              </a>
            </li>
          ))
        ) : (
          <div className="dropzone list-group-item bg-transparent">
            No existen tareas en esta lista
          </div>
        )}
      </ul>
    </div>
  );
};

export default ToDoList;
