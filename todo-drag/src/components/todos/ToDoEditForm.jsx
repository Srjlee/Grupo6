const ToDoEditForm = ({ id, isShow, toggler }) => {
  const dispatch = useDispatch();
  const [toDo, setToDo] = useState(toDo);
  const [wasValidated, setValidationState] = useState(false);
  const successNotification = {
    type: "success",
    title: "Editar Tarea",
    message: "La tarea ha sido editada",
  };

  const close = () => {
    toggler(false);
  };

  const onSubmit = () => {
    if (!toDo.task || !toDo.description) {
      setValidationState(true);
      return;
    }

    setValidationState(false);

    dispatch(updateTodo(id, toDo));
    dispatch(pushNotification(successNotification));

    setToDo([]);
    close();
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        toggler(false);
        close();
      }
    });
    return () => document.removeEventListener("keydown");
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

export default ToDoEditForm;
