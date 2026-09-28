import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
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
    baseUrl: "http://localhost:5000/",
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