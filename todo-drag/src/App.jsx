import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "@assets/css/app.css";

import Navbar from "@components/Navbar";
import ToDoList from "@components/todos/ToDoList";
import NotificationContainer from "@components/notifications/NotificationContainer";
import ToDoCreateForm from "@components/todos/ToDoCreateForm";
import ShowTodo from "@components/todos/ShowTodo";

function App() {
  const [showForm, toggleFormShow] = useState(false);
  const [dragged, setDragged] = useState(null);

  const TODO = "todo";
  const IN_PROGRESS = "inProgress";
  const DONE = "done";

  return (
    <>
      <Navbar />
      <div className="container gap-2 mt-5">
        <div className="row">
          <div className="col-12 col-md-4 my-4 my-md-0">
            <ToDoList
              title="Pendientes"
              type={TODO}
              toggle={toggleFormShow}
              setDragged={setDragged}
              dragged={dragged}
              key="todo"
            />
          </div>
          <div className="col-12 col-md-4 my-4 my-md-0">
            <ToDoList
              title="En progreso"
              type={IN_PROGRESS}
              toggle={toggleFormShow}
              setDragged={setDragged}
              dragged={dragged}
              key="inProgress"
            />
          </div>
          <div className="col-12 col-md-4 my-4 my-md-0">
            <ToDoList
              title="Terminados"
              type={DONE}
              toggle={toggleFormShow}
              setDragged={setDragged}
              dragged={dragged}
              key="done"
            />
          </div>
        </div>
      </div>

      <ToDoCreateForm isShow={showForm} toggler={toggleFormShow} />
      
      <ShowTodo />

      <NotificationContainer />
      <div className="footer text-muted">AppTodo - Johan Tovar 2022</div>
    </>
  );
}

export default App;
