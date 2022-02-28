import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  DocumentRemoveIcon,
  EyeIcon,
  PencilIcon,
} from "@heroicons/react/outline";

const ToDoList = ({ title, type }) => {
  const tasks = useSelector((state) =>
    state.todos.filter((todo) => todo.status === type)
  );
  const [todos, updateTodos] = useState(tasks);
  useEffect(() => {
    if (tasks.length) {
      updateTodos(tasks);
    }
  }, [tasks]);

  return (
    <div className="card">
      <div className="card-header text-capitalize">{title}</div>
      <ul className="list-group list-group-flush">
        {todos.length ? (
          todos.map(({ id, task }) => (
            <span
              href="#!"
              className="list-group-item list-group-item-action d-flex aling-items-center justify-content-between"
              key={id}
            >
              {task}

              <span>
                <EyeIcon
                  class="mx-1"
                  style={{
                    heigth: "1.1rem",
                    width: "1.1rem",
                    cursor: "pointer",
                  }}
                />
                <PencilIcon
                  class="mx-1"
                  style={{
                    heigth: "1.1rem",
                    width: "1.1rem",
                    cursor: "pointer",
                  }}
                />
                <DocumentRemoveIcon
                  class="mx-1"
                  style={{
                    heigth: "1.1rem",
                    width: "1.1rem",
                    cursor: "pointer",
                  }}
                />
              </span>
            </span>
          ))
        ) : (
          <li className="list-group-item">No tienes tareas pendientes</li>
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
