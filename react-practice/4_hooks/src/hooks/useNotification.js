const useNotification = (title, options) => {
  const fireNotif = () => {
    if (!("Notification" in window)) {
      return;
    }
    else if (Notification.permission === "granted") {
      Notification.requestPermission().then(permission => {
        if (permission !== "granted") new Notification(title, options);
        else return;
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};


const Notification = () => {
  const triggerNotif = useNotification("Can i steal your blabla", {
    body: "I love you",
  });
  return (
    <div>
      <button onClick={triggerNotif}>Notify me!</button>
    </div>
  );
};

export default Notification;