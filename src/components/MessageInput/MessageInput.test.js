// MessageInput.test.js

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MessageInput from "./MessageInput";

test("Updates message when typing", () => {
  render(<MessageInput />);

  // Simulate typing into the input field
  fireEvent.change(screen.getByPlaceholderText("Write a message..."), {
    target: { value: "Hello" },
  });

  expect(screen.getByPlaceholderText("Write a message...")).toHaveValue(
    "Hello"
  );
});

test("Calls onSend when send button is clicked", () => {
  const mockOnSend = jest.fn();
  render(<MessageInput onSend={mockOnSend} />);

  // Simulate typing into the input field
  fireEvent.change(screen.getByPlaceholderText("Write a message..."), {
    target: { value: "Hello" },
  });

  // Click the send button
  fireEvent.click(screen.getByText("Send"));

  expect(mockOnSend).toHaveBeenCalledWith("Hello");
});
