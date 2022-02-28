import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, pushNotification, showEditForm } from "@redux/actions";

import ToDoForm from "./ToDoForm";

const ToDoEditForm = () => {
  const dispatch = useDispatch();
  const toDoDefault = { task: "", description: "" };
  const stateToDo = useSelector((state) => state.todo);
  const isShow = useSelector((state) => state.showEditForm);
  const [toDo, setToDo] = useState(toDoDefault);
  const [wasValidated, setValidationState] = useState(false);
  const successNotification = {
    type: "success",
    title: "Editar Tarea",
    message: "La tarea ha sido editada",
  };

  const close = () => {
    dispatch(showEditForm("", false));
  };

  const onSubmit = () => {
    if (!toDo.task || !toDo.description) {
      setValidationState(true);
      return;
    }
    setValidationState(false);
    dispatch(updateTodo(toDo.id, toDo));
    dispatch(pushNotification(successNotification));
    close();
  };
  const onKeydown = (e) => {
    if (e.key === "Escape") {
      close();
    }
  };
  useEffect(() => {    
    if (stateToDo.id) {
      setToDo(stateToDo);
    }
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, [stateToDo]);

  return (
    <div className={`initial-fade ${isShow ? "fade-in" : "fade-out"}`}>
      <div className="wrapper-modal">
        <div className="overlay"></div>
        <div className="card col-10 col-md-6 col-lg-4 mx-auto shadow-lg">
          <h5 className="card-header bg-primary text-light">Editar Tarea</h5>
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

export default ToDoEditForm;
