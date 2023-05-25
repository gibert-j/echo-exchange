import React, { useState } from "react";
import { Button, Input, Container, Row, Col } from "reactstrap";
import styles from "./ChatWindow.module.css";

const ChatWindow = () => {
  const [message, setMessage] = useState("");

  // A placeholder text generation function
  const placeholderText = (length) => {
    return Array.from(
      { length: length },
      () => Math.random().toString(36)[2]
    ).join("");
  };

  const placeholderConversation = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    sender: i % 2 === 0 ? "Person Name 1" : "Person Name 2",
    role: i % 2 === 0 ? "Role 1" : "Role 2",
    message: placeholderText(i % 2 === 0 ? 200 : 50),
    timestamp: new Date().toLocaleTimeString(),
  }));

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    setMessage("");
  };

  return (
    <Container fluid className={styles.chatWindow}>
      {placeholderConversation.map((item) => (
        <div key={item.id} className={styles.messageBlock}>
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
      <Row className={styles.inputRow}>
        <Col xs='9' sm='10'>
          <Input
            type='text'
            value={message}
            onChange={handleChange}
            placeholder='Type a message...'
            className={styles.messageInput}
            onFocus={(e) => (e.target.style.borderColor = "#f96332")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
        </Col>
        <Col xs='3' sm='2'>
          <Button onClick={handleSend} block className={styles.sendButton}>
            Send
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatWindow;
