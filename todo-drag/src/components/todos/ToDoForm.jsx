import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, pushNotification } from "../../redux/actions";
import { CSSTransition } from "react-transition-group";

const ToDoForm = ({ toggleFormShow, showForm }) => {
  const toDoDefault = { task: "", description: "" };
  const dispatch = useDispatch();
  const [toDo, setToDo] = useState(toDoDefault);
  const [wasValidated, setValidationState] = useState(false);

  const successNotification = {
    type: "success",
    title: "Agregar Tarea",
    message: "La tarea ha sido agrega",
  };

  const close = () => {
    toggleFormShow(false);
    pushNotification([]);
  };

  const addTask = () => {
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

  const onChangeHandler = (e) => {
    setToDo({
      ...toDo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTask();
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "k" && e.ctrlKey && e.altKey) {
        toggleFormShow(true);
      }

      if (e.key === "Escape") {
        toggleFormShow(false);
        close();
      }

      return () => document.removeEventListener("keydown");
    });
  }, []);

  return (
    <>
      <div className={`wrapper-modal ${showForm ? "fade-in" : "d-none"}`}>
        <div className="overlay"></div>
        <div className="card col-10 col-md-6 col-lg-4 mx-auto shadow-lg">
          <h5 className="card-header bg-primary text-light">Featured</h5>
          <div className="card-body">
            <form
              onSubmit={onSubmitHandler}
              className={`needs-validation ${
                wasValidated ? "was-validated" : ""
              }`}
            >
              <div className="mb-3">
                <label htmlFor="task" className="form-label">
                  Tarea
                </label>
                <input
                  id="task"
                  name="task"
                  value={toDo.task}
                  onChange={onChangeHandler}
                  type="text"
                  required
                  className="form-control"
                  placeholder="ej. Hacer la homework"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Descripción
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={toDo.description}
                  onChange={onChangeHandler}
                  className="form-control"
                  required
                  placeholder="Agregue un breve descripción para su tarea"
                  rows="3"
                ></textarea>
              </div>
              <div className="d-flex justify-content-around  gap-2">
                <button
                  type="button"
                  onClick={close}
                  className="btn btn-outline-primary btn-block"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary btn-block">
                  Agregar
                </button>
              </div>
            </form>

            <div className="text-center mt-3">
              <small className="text-muted">
                Presiona "Cancelar" o la tecla "Escape" para cerrar
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoForm;
