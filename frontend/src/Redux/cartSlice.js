import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [
    {
      id: 1,
      productName: "T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 100,
      imageLink:
        "https://res.cloudinary.com/ddt1tb3u0/image/upload/v1762171415/Paper_Plane_of_Liberty_Print_Crew_Neck_Short_Sleeve_T-Shirts_-_Grey___XL_bpmsaa.png",
      quentity: 1,
      },
    {
      id: 2,
      productName: "T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 200,
      imageLink:
        "https://res.cloudinary.com/ddt1tb3u0/image/upload/v1762171593/1646822799c97e5f9754d3b3314b4e6ffd848ad22d_thumbnail_900x_xi5e6x.webp",
      quentity: 1,
      },
  ],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // state.value += action.payload;
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