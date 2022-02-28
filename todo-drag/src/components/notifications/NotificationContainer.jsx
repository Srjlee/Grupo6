import { useSelector } from "react-redux";
import Notification from "./Notification";

const NotificationContainer = () => {
  const notifications = useSelector((state) => state.notifications);

  return (
    <div
      className="toast-container position-absolute top-0 end-0 p-3"
      style={{ zIndex: "11" }}
    >
      {notifications.map((notification) => (
        <Notification notification={notification} key={notification.id} />
      ))}
    </div>
  );
};

export default NotificationContainer;
