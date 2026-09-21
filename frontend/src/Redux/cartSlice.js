import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [
   
   
  ],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // state.value += action.payload;
      const productandQuantity = {...action.payload,"quantity": 1}
      state.selectedProducts.push(productandQuantity)
      console.log("done")
    },
    increaseQuantity: (state, action) => {
      // state.value += action.payload;
      console.log("done")
    },
      decreaseQuantity: (state, action) => {
      // state.value += action.payload;
      console.log("done")
    },
      deleteProdeuct: (state, action) => {
      // state.value += action.payload;
      console.log("done")
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, increaseQuantity, decreaseQuantity, deleteProdeuct} = counterSlice.actions;

export default counterSlice.reducer;