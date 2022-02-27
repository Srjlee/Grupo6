import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { CSSTransition } from "react-transition-group";

const ToDoForm = ({ toggleFormShow, showForm }) => {
  const toDoDefault = { task: "", description: "" };
  const dispatch = useDispatch();
  const [toDo, setToDo] = useState(toDoDefault);
  const btnRef = useRef(null);
  const onChangeHandler = (e) => {
    setToDo({
      ...toDo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();    
    dispatch(addTodo(toDo));
    setToDo(toDoDefault);
  };
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "k" && e.ctrlKey && e.altKey) {
        toggleFormShow(true);
      }
      if (e.key === "Escape") {
        toggleFormShow(false);
      }
      if (e.keyCode === 13) {
        e.preventDefault();        
        btnRef.current.click();
      }
    });
  }, []);

  return (
    <>
      <CSSTransition
        in={showForm}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <div className="wrapper-modal">
          <div className="overlay"></div>
          <div className="card col-10 col-md-6 col-lg-4 mx-auto shadow-lg">
            <h5 className="card-header bg-primary text-light">Featured</h5>
            <div className="card-body">
              <form onSubmit={onSubmitHandler}>
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
                    required
                    className="form-control"
                    placeholder="Agregue un breve descripción para su tarea"
                    rows="3"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-around  gap-2">
                  <button
                    type="button"
                    onClick={() => toggleFormShow(false)}
                    className="btn btn-outline-primary btn-block"
                  >
                    Cancelar
                  </button>
                  <button
                    ref={btnRef}
                    type="submit"
                    className="btn btn-primary btn-block"
                    de
                  >
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default ToDoForm;
