import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import MessengerApp from "./components/MessengerApp";
import ErrorBoundary from "./components/ErrorHandling/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <MessengerApp />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
