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
  }),
});

export const { useGetAllProductsQuery } = bookApi;
