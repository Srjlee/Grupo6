import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, pushNotification, showCreateForm } from "@redux/actions";
import { useSelector } from "react-redux";

import ToDoForm from "./ToDoForm";

const ToDoCreateForm = () => {
  const toDoDefault = { task: "", description: "" };
  const successNotification = {
    type: "success",
    title: "Agregar Tarea",
    message: "La tarea ha sido agrega",
  };

  const isShow = useSelector((state) => state.showCreateForm);
  const dispatch = useDispatch();
  const [toDo, setToDo] = useState(toDoDefault);
  const [wasValidated, setValidationState] = useState(false);

  const close = () => {
    dispatch(showCreateForm(false));
  };

  const onSubmit = () => {
    if (!toDo.task || !toDo.description) {
      setValidationState(true);
      return;
    }

    setValidationState(false);

    dispatch(addTodo(toDo));
    dispatch(pushNotification(successNotification));

    setToDo(toDoDefault);
    document.querySelector("[name='task']").focus();
  };

  const keydownHandler = (e) => {
    if (e.key === "k" && e.ctrlKey && e.altKey) {
      dispatch(showCreateForm(true));
    }

    if (e.key === "Escape") {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  }, []);

  return (
    <div className={`initial-fade ${isShow ? "fade-in" : "fade-out"}`}>
      <div className="wrapper-modal">
        <div className="overlay"></div>
        <div className="card col-10 col-md-6 col-lg-4 mx-auto shadow-lg">
          <h5 className="card-header bg-primary text-light">Agregar Tarea</h5>
          <div className="card-body">
            <ToDoForm
              toDo={toDo}
              updateTodo={setToDo}
              onSubmit={onSubmit}
              wasValidated={wasValidated}
              onClose={close}
            />
          </div>
          <div className="text-center mt-3 mb-2">
            <small className="text-muted">
              Presiona "Cancelar" o la tecla "Escape" para cerrar
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoCreateForm;
