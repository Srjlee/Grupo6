import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadTodoLocalStorage } from "@redux/actions";

import "@assets/css/app.css";

import Navbar from "@components/Navbar";
import ToDoList from "@components/todos/ToDoList";
import NotificationContainer from "@components/notifications/NotificationContainer";
import ToDoCreateForm from "@components/todos/ToDoCreateForm";
import ToDoEditForm from "@components/todos/ToDoEditForm";
import ShowTodo from "@components/todos/ShowTodo";

function App() {
  const [dragged, setDragged] = useState(null);
  const dispatch = useDispatch();

  const TODO = "todo";
  const IN_PROGRESS = "inProgress";
  const DONE = "done";

  useEffect(() => {
    let toDos = JSON.parse(localStorage.getItem("toDos")) ?? [];
    if (toDos.length) {
      dispatch(loadTodoLocalStorage(toDos));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="container gap-2 pt-4">
        <div className="row">
          <div className="col-12 col-md-4 my-4 my-md-0">
            <ToDoList
              title="Pendientes"
              type={TODO}
              setDragged={setDragged}
              dragged={dragged}
              key="todo"
            />
          </div>
          <div className="col-12 col-md-4 my-4 my-md-0">
            <ToDoList
              title="En progreso"
              type={IN_PROGRESS}
              setDragged={setDragged}
              dragged={dragged}
              key="inProgress"
            />
          </div>
          <div className="col-12 col-md-4 my-4 my-md-0">
            <ToDoList
              title="Terminados"
              type={DONE}
              setDragged={setDragged}
              dragged={dragged}
              key="done"
            />
          </div>
        </div>
      </div>

      <ToDoCreateForm />

      <ToDoEditForm />

      <ShowTodo />

      <NotificationContainer />
      <div className="footer text-muted">AppTodo - Johan Tovar 2022</div>
    </>
  );
}

export default App;
