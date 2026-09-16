import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

export const { useGetproductByNameQuery } = productApi;