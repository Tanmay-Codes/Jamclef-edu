// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./features/auth";
import handleProjects from "./features/handleProjects";
export const store = configureStore({
  reducer: {
    auth: authreducer,
    handleProject: handleProjects,
  },
});
