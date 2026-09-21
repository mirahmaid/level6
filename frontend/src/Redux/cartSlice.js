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
      const increaseProduct = state.selectedProducts.find((item) => {
      return item.id === action.payload.id  
      }
      )
      increaseProduct.quantity += 1;
      console.log("done")
    },
      decreaseQuantity: (state, action) => {
      // state.value += action.payload;
      const decreaseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id
        
      }
      )
      decreaseProduct.quantity -= 1;
      if (decreaseProduct.quantity === 0) {
        const newArr = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id
          
        }
        )
        state.selectedProducts =newArr ;
      }
      console.log("done")
    },
      deleteProdeuct: (state, action) => {
      // state.value += action.payload;
      const newArr = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id
        
      }
      )
      state.selectedProducts = newArr;
      console.log("done")
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, increaseQuantity, decreaseQuantity, deleteProdeuct} = counterSlice.actions;

export default counterSlice.reducer;