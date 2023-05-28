import React from "react";
import MessageInput from "./MessageInput";
import placeholderMessages from "../data/placeholderMessages.json";
import styles from "./MessageWindow.module.css";

const MessageWindow = ({ selectedUser, currentConversation, sendMessage }) => {
  // *** render the conversation based on the currentConversation state ***
  // *** using the placeholderConversation.json until redux is implemented ***

  const placeholderConversation = placeholderMessages.message.map(
    (message, index) => ({
      id: index,
      sender: index % 2 === 0 ? "You" : "Jim Jefferies",
      role:
        index % 2 === 0
          ? "Head Honcho of Coffee Bean Quality Control"
          : "Executive Joke Advisor to the Queen of England",
      message: message,
      timestamp: new Date().toLocaleTimeString(),
    })
  );

  return (
    <div className={styles.messageWindow}>
      <div className={styles.messageContainer}>
        {placeholderConversation.map((item) => (
          <div
            key={item.id}
            className={`${styles.messageBlock} ${
              item.sender === "You" ? styles.myMessage : styles.theirMessage
            }`}
          >
            <div className={styles.messageHeader}>
              <div className={styles.senderRole}>
                <strong className={styles.sender}>{item.sender}</strong>
                <span className={styles.role}>{item.role}</span>
              </div>
              <span className={styles.timestamp}>{item.timestamp}</span>
            </div>
            <p className={styles.messageText}>{item.message}</p>
          </div>
        ))}
      </div>
      <MessageInput onSend={sendMessage} />
    </div>
  );
};

export default MessageWindow;
