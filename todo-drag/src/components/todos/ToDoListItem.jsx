import {
  DocumentRemoveIcon,
  EyeIcon,
  PencilIcon,
} from "@heroicons/react/outline";
import { Tooltip } from "bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, showTodo } from "@redux/actions";

const ToDoListItem = ({ toDo, setDragged }) => {
  const { id, task, status } = toDo;
  const [classes, updateClasses] = useState("");
  const dispatch = useDispatch();

  const onDragStart = (e) => {
    setDragged({
      id: e.target.id,
      type: status,
    });

    updateClasses("bg-light hidden-icon");
  };

  const onDragEnd = (e) => {
    updateClasses("bg-transparent");
  };

  useEffect(() => {
    let tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-tooltip-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
    return () => {
      let tooltips = [].slice.call(document.querySelectorAll(".tooltip"));
      tooltips.forEach((tooltip) => tooltip.remove());
    };
  }, []);

  return (
    <>
      <li className="list-group-item list-group-item-action bg-transparent">
        <a
          id={id}
          href="#!"
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          className={`d-flex list-group-item aling-items-center justify-content-between cursor-move ${classes}`}
        >
          {task}
          <span className="icon-wrapper">
            <EyeIcon
              className="mx-1 icon"
              data-bs-tooltip-toggle="tooltip"
              data-bs-placement="top"
              title="Ver"
              data-bs-toggle="modal"
              data-bs-target="#modalScreen"
              onClick={() => dispatch(showTodo(id))}
            />
            <PencilIcon
              className="mx-1 icon"
              data-bs-tooltip-toggle="tooltip"
              data-bs-placement="top"
              title="Editar"
              type="button"              
            />
            <DocumentRemoveIcon
              className="mx-1 icon"
              data-bs-tooltip-toggle="tooltip"
              data-bs-placement="top"
              title="Eliminar"
              onClick={() => dispatch(removeTodo(id))}
            />
          </span>
        </a>
      </li>
    </>
  );
};

export default ToDoListItem;
