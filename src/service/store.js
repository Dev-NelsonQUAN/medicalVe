import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UserRTK";
import medGetReducer from "./GlobalState"

const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
    medGet: medGetReducer, 

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userSlice.middleware),
});

export default store