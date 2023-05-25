import React from "react";
import { Container } from "reactstrap";
// import ChatList from "./components/ChatList";
import MessageWindow from "./components/MessageWindow";
import "./App.css";

const App = () => {
  return (
    <Container>
      <MessageWindow />
    </Container>
  );
};

export default App;
