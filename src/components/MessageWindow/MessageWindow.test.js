import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MessageWindow from "./MessageWindow";

test("Renders correct messageThread and selectedUser", () => {
  const selectedUser = { id: 1, name: "John Doe" };
  const messageThread = [
    { message: "Hello", timestamp: "10:30 AM" },
    { message: "How are you?", timestamp: "10:35 AM" },
  ];

  render(
    <MessageWindow selectedUser={selectedUser} messageThread={messageThread} />
  );

  // Check if the selectedUser name is displayed
  expect(screen.getByText(selectedUser.name)).toBeInTheDocument();

  // Check if the messages are displayed
  messageThread.forEach((message) => {
    expect(screen.getByText(message.message)).toBeInTheDocument();
  });
});
