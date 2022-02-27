import { Toast } from "bootstrap";
import { useEffect, useRef } from "react";

import Logo from "@assets/images/logo.png";

const Notification = ({ notification }) => {
  const liveToast = useRef(null);
  const { type, title, message } = notification;

  useEffect(() => {
    if (notification) {
      let toast = new Toast(liveToast.current);
      toast.show();
    }
  }, []);

  return (
    <div
      id="liveToast"
      ref={liveToast}
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

        <small className="text-capitalize text-success fw-bolder">{title}</small>
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
