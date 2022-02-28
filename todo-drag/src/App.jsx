import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "@assets/css/app.css";

import Navbar from "@components/Navbar";
import ToDoForm from "@components/todos/ToDoForm";
import ToDoList from "./components/todos/ToDoList";
import NotificationContainer from "@components/notifications/NotificationContainer";

function App() {
  const [showForm, toggleFormShow] = useState(false);
  const TODO = "todo";
  const IN_PROGRESS = "inProgress";
  const DONE = "done";

  return (
    <>
      <Navbar />
      <button onClick={() => toggleFormShow(true)}>Open</button>
      <div className="container gap-2 ">
        <div className="row">
          <div className="col-12 col-md-4 my-4 my-md-0">
            <ToDoList title="Pendientes" type={TODO} key="todo" />
          </div>
          <div className="col-12 col-md-4 my-4 my-md-0">
            <ToDoList title="Pendientes" type={IN_PROGRESS} key="inProgress" />
          </div>
          <div className="col-12 col-md-4 my-4 my-md-0">
            <ToDoList title="Pendientes" type={DONE} key="done" />
          </div>
        </div>
      </div>

      <ToDoForm showForm={showForm} toggleFormShow={toggleFormShow} />

      <NotificationContainer />
    </>
  );
}

export default App;
