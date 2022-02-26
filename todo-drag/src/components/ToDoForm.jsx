import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const ToDoForm = () => {
  const toDoDefault = { task: "", description: "" };
  const dispatch = useDispatch();
  const [toDo, setToDo] = useState(toDoDefault);

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

  return (
    <>
      <div className="card w-50 mx-auto shadow-lg">
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
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-block">
                Agregar Tarea
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ToDoForm;
