import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
// import { Container } from "reactstrap";
import MessengerApp from "./components/MessengerApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Container> */}
    <MessengerApp />
    {/* </Container> */}
  </React.StrictMode>
);
