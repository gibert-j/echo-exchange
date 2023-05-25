import React, { useState } from "react";
import { Button, Input, Row, Col } from "reactstrap";
import styles from "./MessageWindow.module.css";
import jokesData from "./data/jokes.json";

const MessageWindow = () => {
  const [message, setMessage] = useState("");

  const placeholderConversation = jokesData.jokes.map((joke, index) => ({
    id: index,
    sender: index % 2 === 0 ? "You" : "Jim Jefferies",
    role:
      index % 2 === 0
        ? "Head Honcho of Coffee Bean Quality Control"
        : "Executive Joke Advisor to the Queen of England",
    message: joke,
    timestamp: new Date().toLocaleTimeString(),
  }));

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    setMessage("");
  };

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
      <div className={styles.inputRow}>
        <Row noGutters>
          <Col xs="10" sm="10" lg="11">
            <Input
              type="text"
              value={message}
              onChange={handleChange}
              placeholder="Type a message..."
              className={styles.messageInput}
              onFocus={(e) => (e.target.style.borderColor = "#f96332")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </Col>
          <Col xs="2" sm="2" lg="1">
            <Button onClick={handleSend} block className={styles.sendButton}>
              Send
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MessageWindow;
