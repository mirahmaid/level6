import { createSlice } from "@reduxjs/toolkit";

const initialState = {
selectedProducts: localStorage.getItem("selectproducts")? JSON.parse(localStorage.getItem("selectproducts")) : [],
selectedProductsID: localStorage.getItem("selectproductsID")? JSON.parse(localStorage.getItem("selectproductsID")): [],
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
      state.selectedProductsID.push(action.payload.id)
       localStorage.setItem("selectproducts",JSON.stringify(state.selectedProducts))
      localStorage.setItem("selectproductsID",JSON.stringify(state.selectedProductsID))
      
      
      },
    increaseQuantity: (state, action) => {
      // state.value += action.payload;
      const increaseProduct = state.selectedProducts.find((item) => {
      return item.id === action.payload.id  
      }
      )
      localStorage.setItem("selectproductsID",JSON.stringify(state.selectedProductsID))
      increaseProduct.quantity += 1;
      localStorage.setItem("selectproducts",JSON.stringify(state.selectedProducts))
      console.log("done")
    },
      decreaseQuantity: (state, action) => {
      // state.value += action.payload;
      const decreaseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id
        
      }
      )
      decreaseProduct.quantity -= 1;
      localStorage.setItem("selectproducts",JSON.stringify(state.selectedProducts))
      localStorage.setItem("selectproductsID",JSON.stringify(state.selectedProductsID))
      if (decreaseProduct.quantity === 0) {
         const newArr = state.selectedProducts.filter((item) => {
          return item.id !==action.payload.id;
          
        }
        )
         const newArr2 = state.selectedProductsID.filter((item) => {
          return item !==action.payload.id;
          
        }
        )
        state.selectedProducts =newArr ;
        state.selectedProductsID =newArr2 ;

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
        localStorage.setItem(
        "selectproducts",
        JSON.stringify(state.selectedProducts),
      );
      localStorage.setItem(
        "selectproductsID",
        JSON.stringify(state.selectedProductsID),
      );
      console.log("done")
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, increaseQuantity, decreaseQuantity, deleteProdeuct} = counterSlice.actions;

export default counterSlice.reducer;