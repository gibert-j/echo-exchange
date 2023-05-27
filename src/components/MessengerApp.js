import React, { useState } from "react";
import MessageList from "./MessageList";
import MessageWindow from "./MessageWindow";
import styles from "./MessengerApp.module.css";

const MessengerApp = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className={styles.MessengerContainer}>
      <MessageList onUserClick={handleUserClick} selectedUser={selectedUser} />
      <MessageWindow selectedUser={selectedUser} />
    </div>
  );
};

export default MessengerApp;
