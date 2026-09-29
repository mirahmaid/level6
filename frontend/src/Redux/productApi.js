import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://level6-wbsr.onrender.com/",
  }),

  endpoints: (builder) => ({
    getproductByName: builder.query({
      query: () => "products",
    }),
  }),
});

export const oneproductApi = createApi({
  reducerPath: "oneproductApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://level6-wbsr.onrender.com/",
  }),

  endpoints: (build) => ({
    getOneProduct: build.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetproductByNameQuery,
} = productApi;

export const {
  useGetOneProductQuery,
} = oneproductApi;