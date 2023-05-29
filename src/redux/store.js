import { configureStore } from "@reduxjs/toolkit";
import messagingReducer from "./messagingSlice";

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

export default configureStore({
  reducer: {
    messaging: messagingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
