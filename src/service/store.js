import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UserRTK";
import medGetReducer from "./GlobalState"
import { medicineApi } from './MedicineRtk';
import { pharmacyApi } from './PharmacyRTK'

const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
    medGet: medGetReducer, 

    [medicineApi.reducerPath]: medicineApi.reducer,
    [pharmacyApi.reducerPath]: pharmacyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userSlice.middleware)    // Add userSlice middleware
      .concat(medicineApi.middleware)
      .concat(pharmacyApi.middleware), // Add medicineApi middleware!
});

export default store;
