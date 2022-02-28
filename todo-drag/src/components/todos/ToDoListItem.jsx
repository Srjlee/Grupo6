import {
  DocumentRemoveIcon,
  EyeIcon,
  PencilIcon,
} from "@heroicons/react/outline";
import { Tooltip } from "bootstrap";
import { useEffect, useState } from "react";

const ToDoListItem = ({ toDo, setDragged }) => {
  const { id, task, status } = toDo;
  const [classes, updateClasses] = useState("");

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
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
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
    </>
  );
};

export default ToDoListItem;
