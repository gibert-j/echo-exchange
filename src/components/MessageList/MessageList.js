import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Input } from "reactstrap";
import usersData from "../../data/users.json";
import styles from "./MessageList.module.css";

const MessageList = ({ onUserClick, selectedUser }) => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    const results = usersData.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setUsers(results);
  }, [search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleUserClick = (user) => {
    console.log(`handleUserClick user: ${user}`);
    if (onUserClick) {
      onUserClick(user);
    }
  };

  return (
    <div className={styles.messageList}>
      <Input
        type='text'
        placeholder='Search...'
        value={search}
        onChange={handleChange}
        className={styles.searchInput}
      />
      <ListGroup flush>
        {users.map((user) => (
          <ListGroupItem
            key={user.id}
            className={`${styles.userItem} ${
              selectedUser && selectedUser.id === user.id
                ? styles.selectedUser
                : ""
            }`}
            onClick={() => handleUserClick(user)}
          >
            <img src={user.img} alt={user.name} className={styles.userImage} />
            <div>
              <strong className={styles.userName}>{user.name}</strong>
              <p className={styles.userRole}>{user.role}</p>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default MessageList;
