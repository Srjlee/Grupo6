import Logo from "@assets/images/logo.png";
import { Toast } from "bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeNotification } from "@redux/actions";

const Notification = ({ notification }) => {
  const { id, title, message } = notification;
  
  const dispatch = useDispatch();
  const popNotification = () => dispatch(removeNotification());
  
  useEffect(() => {
    const toastEl = document.getElementById(id);
    const toast = new Toast(toastEl);
    toast.show();
    toastEl.addEventListener("hidden.bs.toast", popNotification);
    return () =>
      toastEl.removeEventListener("hidden.bs.toast", popNotification);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      id={id}
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <img
          src={Logo}
          className="me-auto rounded me-2"
          alt="logo bootstrap"
          style={{ width: "2rem" }}
        />

        <small className="text-capitalize text-success fw-bolder">
          {title}
        </small>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body">{message}</div>
    </div>
  );
};

export default Notification;
