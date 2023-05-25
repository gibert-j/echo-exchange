import React from "react";
import MessageList from "./MessageList";
import MessageWindow from "./MessageWindow";
import styles from "./MessengerApp.module.css";

const MessengerApp = () => {
  return (
    <div className={styles.MessengerContainer}>
      <MessageList />
      <MessageWindow />
    </div>
  );
};

export default MessengerApp;
