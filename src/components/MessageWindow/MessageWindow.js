import React from "react";
import { useDispatch } from "react-redux";
// import { sendMessage } from "../../redux/messagingSlice";
import MessageInput from "../MessageInput/MessageInput";
import styles from "./MessageWindow.module.css";

const MessageWindow = ({ selectedUser, messageThread, sendMessage }) => {
  // console.log(sendMessage);
  const dispatch = useDispatch();

  const handleSend = (message) => {
    console.log(selectedUser);
    console.log(selectedUser.id);
    console.log(message);
    if (selectedUser && message) {
      dispatch(sendMessage({ userId: selectedUser.id, message: message }));
    }
  };

  // console.log(`MessageWindow re-renders: ${messageThread}`);

  const currentThread = messageThread.map((message, index) => ({
    id: index,
    sender: "You",
    role: "Head Honcho of Coffee Bean Quality Control",
    message: message.message,
    timestamp: message.timestamp,
  }));

  return (
    <div className={styles.messageWindow}>
      <div className={styles.messageContainer}>
        {currentThread.map((item) => (
          <div
            key={item.id}
            className={`${styles.messageBlock} ${
              item.sender === "You" ? styles.myMessage : styles.theirMessage
            }`}
          >
            <div className={styles.messageHeader}>
              <div className={styles.senderRole}>
                <strong className={styles.sender}>{item.sender}</strong>
                {/* <span className={styles.role}>{item.role}</span> */}
              </div>
              {/* <span className={styles.timestamp}>{item.timestamp}</span> */}
            </div>
            <p className={styles.messageText}>{item.message}</p>
          </div>
        ))}
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default MessageWindow;
