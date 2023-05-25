import React, { useState } from "react";
import { Button, Input, Row, Col } from "reactstrap";
import styles from "./MessageWindow.module.css";

const MessageWindow = () => {
  const [message, setMessage] = useState("");

  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "What did the grape do when it got stepped on? It let out a little wine!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "How do you organize a space party? You planet!",
    "How's this? 🤔 💭 Here's some random placeholder text to make the conversation longer and check the boundaries to make sure text is not overflowing 👍 looking pretty overall. What do you think? Do you like it? Ask your friends. Do they like it? I knew they would 😊",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What's the best time to go to the dentist? Tooth-hurty!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "I used to be a baker, but I couldn't make enough dough!",
  ];

  const placeholderConversation = jokes.map((joke, index) => ({
    id: index,
    sender: index % 2 === 0 ? "You" : "Jim Jefferies",
    role: index % 2 === 0 ? "Role 1" : "Role 2",
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
          <Col xs='10' sm='10' lg='11'>
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
          <Col xs='2' sm='2' lg='1'>
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
