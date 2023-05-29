import React, { useState } from "react";
import { Button, Input, Row, Col } from "reactstrap";
import styles from "./MessageInput.module.css";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    if (onSend) {
      onSend(message);
    }
    setMessage("");
  };

  return (
    <div className={styles.messageInput}>
      <Row noGutters>
        <Col xs='10' sm='10' lg='11'>
          <Input
            type='text'
            value={message}
            onChange={handleChange}
            placeholder='Write a message...'
            className={styles.textInput}
            onFocus={(e) => (e.target.style.borderColor = "#f96332")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
        </Col>
        <Col xs='2' sm='2' lg='1'>
          <Button onClick={handleSend} block className={styles.sendButton}>
            Send
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default MessageInput;
