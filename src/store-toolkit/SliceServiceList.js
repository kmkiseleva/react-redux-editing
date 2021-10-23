import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

const initialState = {
  items: [
    { id: shortid.generate(), name: "Замена стекла", price: 21000 },
    { id: shortid.generate(), name: "Замена дисплея", price: 25000 },
    { id: shortid.generate(), name: "Замена аккумулятора", price: 4000 },
  ],
  currentEditServiceId: "",
};

const counterSlice = createSlice({
  name: "serviceList",
  initialState,
  reducers: {
    addService(state, action) {
      state.items.push({ id: shortid.generate(), ...action.payload });
    },

    removeService(state, action) {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items.splice(index, 1);
    },

    editService(state, action) {
      const { id, name, price } = action.payload;
      const service = state.items.find((item) => item.id === id);
      const editService = {
        ...service,
        id,
        name,
        price,
      };

      console.log(editService);
      const newState = state.items.filter((item) => item.id !== id);
      state.items = [...newState, editService];
    },

    addCurrentServiceId(state, action) {
      const { id } = action.payload;
      state.currentEditServiceId = id;
    },

    clearCurrentServiceId(state) {
      state.currentEditServiceId = "";
    },
  },
});

export const {
  addService,
  removeService,
  editService,
  addCurrentServiceId,
  clearCurrentServiceId,
} = counterSlice.actions;
export default counterSlice.reducer;
