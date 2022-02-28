const ToDoForm = ({ toDo, updateTodo, onSubmit, wasValidated, onClose }) => {
  const onChangeHandler = (e) => {
    updateTodo({
      ...toDo,
      [e.target.name]: e.target.value,
    });
  };

  const onCloseHandler = (e) => {
    e.preventDefault();
    onClose();
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className={`needs-validation ${wasValidated ? "was-validated" : ""}`}
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
            autoFocus
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
            onClick={onCloseHandler}
            className="btn btn-outline-primary btn-block"
          >
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary btn-block">
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};

export default ToDoForm;
