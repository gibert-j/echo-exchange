import styles from "./ChatList.module.css";
import React, { useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

const ChatList = () => {
  const data = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    name: `Very Very Long Person Name ${
      i + 1
    } with additional text to make it really long`,
    role: `Very Very Long Job Role ${
      i + 1
    } with additional text to make it really long`,
  }));

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    if (event.target.value !== "") {
      const results = data.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults(data);
    }
  };

  return (
    <Container className={styles.chatContainer}>
      <Input
        type='text'
        placeholder='Search Conversations'
        value={searchTerm}
        onChange={handleChange}
        className={styles.searchInput}
      />
      <ListGroup className='mt-4'>
        {searchResults.map((item) => (
          <ListGroupItem key={item.id} className={styles.listGroupItem}>
            <Row>
              <Col xs='4'>
                <img
                  src='https://via.placeholder.com/50'
                  alt='Profile'
                  className='mr-3'
                />
              </Col>
              <Col xs='8' className={styles.chatItemContainer}>
                <div className={styles.listItemInfo}>
                  <strong className={styles.textOverflow}>{item.name}</strong>
                  <div className={styles.textOverflow}>{item.role}</div>
                </div>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ChatList;
