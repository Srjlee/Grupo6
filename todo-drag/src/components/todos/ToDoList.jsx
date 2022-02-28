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

const ToDoList = ({ title, type, toggle, setDragged, dragged }) => {
  const tasks = useSelector((state) =>
    state.todos.filter((todo) => todo.status === type)
  );
  const [todos, updateTodos] = useState(tasks);
  const dispatch = useDispatch();

  /* let dragged; */

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
    if (ele.classList.contains("dropzone") && ele.parentNode.id !== "todo") {
      ele.parentNode.classList.add("bg-danger");
    }
  };

  const onDragLeave = (e) => {
    const ele = e.target;
    if (ele.classList.contains("dropzone") && ele.parentNode.id !== "todo") {
      ele.parentNode.classList.remove("bg-danger");
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    const ele = e.target;

    if (ele.classList.contains("dropzone") && ele.parentNode.id !== "todo") {
      ele.parentNode.classList.remove("bg-danger");
    }

    dispatch(updateTodo(dragged.id, { status: type }));
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
            className="mx-1"
            style={{
              heigth: "1.1rem",
              width: "1.1rem",
              cursor: "pointer",
            }}
          />
        ) : null}
      </div>
      <ul
        id={type}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className="list-group list-group-flush"
      >
        {todos.length ? (
          todos.map(({ id, task }) => (
            <li
              className="dropzone list-group-item list-group-item-action"
              key={id}
            >
              <a
                id={id}
                href="#!"
                onDragStart={dragStart}
                className="d-flex list-group-item aling-items-center justify-content-between "
                style={{ cursor: "text" }}
              >
                {task}
                <span>
                  <EyeIcon
                    className="mx-1"
                    style={{
                      heigth: "1.1rem",
                      width: "1.1rem",
                      cursor: "pointer",
                    }}
                  />
                  <PencilIcon
                    className="mx-1"
                    style={{
                      heigth: "1.1rem",
                      width: "1.1rem",
                      cursor: "pointer",
                    }}
                  />
                  <DocumentRemoveIcon
                    className="mx-1"
                    style={{
                      heigth: "1.1rem",
                      width: "1.1rem",
                      cursor: "pointer",
                    }}
                  />
                </span>
              </a>
            </li>
          ))
        ) : (
          <div className="dropzone list-group-item bg-transparent">
            No tienes tareas pendientes
          </div>
        )}
        {/* todos.map(({task}) => (
        <a href="#!" className="list-group-item list-group-item-action">
          {task}
        </a>
        )):(
        <></>
        )) */}
      </ul>
    </div>
  );
};

export default ToDoList;
