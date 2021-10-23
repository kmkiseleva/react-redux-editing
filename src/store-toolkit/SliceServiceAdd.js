import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  price: "",
};

const counterSlice = createSlice({
  name: "serviceAdd",
  initialState,
  reducers: {
    changeServiceField(state, action) {
      const { type, value } = action.payload;
      state[type] = value;
    },
    clearForm() {
      return initialState;
    },
  },
});

export const { changeServiceField, clearForm } = counterSlice.actions;
export default counterSlice.reducer;
