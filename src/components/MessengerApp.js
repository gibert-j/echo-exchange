import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, sendMessage } from "../redux/messagingSlice";
import MessageList from "./MessageList/MessageList";
import MessageWindow from "./MessageWindow/MessageWindow";
import styles from "./MessengerApp.module.css";

const MessengerApp = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.messaging.selectedUser);
  const messages = useSelector(
    (state) => state.messaging.messages[selectedUser?.id] || []
  );

  const handleUserClick = (user) => {
    dispatch(selectUser(user));
  };

  const handleSendMessage = (message) => {
    if (selectedUser && message) {
      dispatch(sendMessage({ userId: selectedUser.id, message }));
    }
  };

  // try {
  //   console.log("handleSendMessage is called", message);
  //   dispatch(sendMessage({ userId: selectedUser.id, message }));
  // } catch (error) {
  //   console.error("handleSendMessage error:", error);
  // }

  return (
    <div className={styles.MessengerContainer}>
      <MessageList onUserClick={handleUserClick} selectedUser={selectedUser} />
      <MessageWindow
        selectedUser={selectedUser}
        messageThread={messages}
        sendMessage={handleSendMessage}
      />
    </div>
  );
};

export default MessengerApp;
