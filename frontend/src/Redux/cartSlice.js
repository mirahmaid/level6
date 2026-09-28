import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: localStorage.getItem("selectproducts")
    ? JSON.parse(localStorage.getItem("selectproducts"))
    : [],

  selectedProductsID: localStorage.getItem("selectproductsID")
    ? JSON.parse(localStorage.getItem("selectproductsID"))
    : [],
};

export const counterSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addProduct: (state, action) => {
      const productandQuantity = {
        ...action.payload,
        quantity: 1,
      };

      state.selectedProducts.push(productandQuantity);

      state.selectedProductsID.push(action.payload.id);

      localStorage.setItem(
        "selectproducts",
        JSON.stringify(state.selectedProducts)
      );

      localStorage.setItem(
        "selectproductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },

    increaseQuantity: (state, action) => {
      const increaseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      if (increaseProduct) {
        increaseProduct.quantity += 1;
      }

      localStorage.setItem(
        "selectproducts",
        JSON.stringify(state.selectedProducts)
      );
    },

    decreaseQuantity: (state, action) => {
      const decreaseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      if (!decreaseProduct) return;

      decreaseProduct.quantity -= 1;

      if (decreaseProduct.quantity === 0) {
        state.selectedProducts = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });

        state.selectedProductsID = state.selectedProductsID.filter((item) => {
          return item !== action.payload.id;
        });
      }

      localStorage.setItem(
        "selectproducts",
        JSON.stringify(state.selectedProducts)
      );

      localStorage.setItem(
        "selectproductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },

    deleteProdeuct: (state, action) => {
      state.selectedProducts = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.selectedProductsID = state.selectedProductsID.filter((item) => {
        return item !== action.payload.id;
      });

      localStorage.setItem(
        "selectproducts",
        JSON.stringify(state.selectedProducts)
      );

      localStorage.setItem(
        "selectproductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },
  },
});

export const {
  addProduct,
  increaseQuantity,
  decreaseQuantity,
  deleteProdeuct,
} = counterSlice.actions;

export default counterSlice.reducer;