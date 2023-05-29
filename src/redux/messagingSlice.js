import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: {},
  selectedUser: null,
};

const messagingSlice = createSlice({
  name: "messaging",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      const { userId, message } = action.payload;
      if (!state.messages[userId]) {
        state.messages[userId] = [];
      }
      const newMessage = {
        message,
        timestamp: new Date().toLocaleTimeString(),
        // add more fields ie role here
      };
      state.messages[userId].push(newMessage);
    },

    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { sendMessage, selectUser } = messagingSlice.actions;

export default messagingSlice.reducer;
