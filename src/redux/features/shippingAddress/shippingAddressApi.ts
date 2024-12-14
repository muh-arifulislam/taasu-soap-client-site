import { baseApi } from "../../api/baseApi";

const shippingAddressApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAddress: builder.query({
      query: () => ({
        url: `/shipping-addresses`,
        method: "GET",
      }),
      providesTags: ["shippingAddress"],
    }),

    deleteAddress: builder.mutation({
      query: (id: string) => ({
        url: `/shipping-addresses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["shippingAddress"],
    }),
  }),
});

export const { useGetAllAddressQuery, useDeleteAddressMutation } =
  shippingAddressApi;
