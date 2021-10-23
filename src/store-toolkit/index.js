import { configureStore } from "@reduxjs/toolkit";
import serviceList from "./SliceServiceList";
import serviceAdd from "./SliceServiceAdd";

const store = configureStore({
  reducer: {
    serviceList,
    serviceAdd,
  },
});

export default store;
