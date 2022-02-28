import { useDispatch } from "react-redux";
import { updateTodo } from "@redux/actions";
import { useState } from "react";

const Dropzone = ({ children, type, dragged }) => {
  const dispatch = useDispatch();
  const [classes, updateClasses] = useState("");

  const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    updateClasses("bg-secondary opacity-25");
  };

  const onDragEnter = (e) => {
    updateClasses("bg-secondary opacity-25");
  };

  const onDragLeave = (e) => {
    updateClasses("bg-transparent opacity-100");
  };

  const onDrop = (e) => {
    e.preventDefault();    
    dispatch(updateTodo(dragged.id, { status: type }));
    updateClasses("bg-transparent opacity-100");
  };
  return (
    <ul
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`list-group list-group-flush ${classes}`}
    >
      {children}
    </ul>
  );
};

export default Dropzone;
