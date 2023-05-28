import React, { useState } from "react";
import MessageList from "./MessageList";
import MessageWindow from "./MessageWindow";
import styles from "./MessengerApp.module.css";

const MessengerApp = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentConversation, setCurrentConversation] = useState([]);

  const selectUser = (user) => {
    setSelectedUser(user);
    // *** need tofetch and set the conversation with the selected user here ***
    setCurrentConversation([]);
  };

  const sendMessage = (message) => {
    // *** send the message and update the conversation here ***
  };

  return (
    <div className={styles.MessengerContainer}>
      <MessageList onUserClick={selectUser} selectedUser={selectedUser} />
      <MessageWindow
        selectedUser={selectedUser}
        currentConversation={currentConversation}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default MessengerApp;
