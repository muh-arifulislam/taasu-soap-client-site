import { baseApi } from "../../api/baseApi";

const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (query?: string) => ({
        url: `/product?${query}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getProductById: builder.query({
      query: (id: string) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = bookApi;
