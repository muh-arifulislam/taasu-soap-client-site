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

    addAddress: builder.mutation({
      query: (payload) => ({
        url: `/shipping-addresses`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["shippingAddress"],
    }),
    updateAddress: builder.mutation({
      query: (payload) => ({
        url: `/shipping-addresses/${payload.id}`,
        method: "PUT",
        body: payload.data,
      }),
      invalidatesTags: ["shippingAddress"],
    }),
  }),
});

export const {
  useGetAllAddressQuery,
  useDeleteAddressMutation,
  useAddAddressMutation,
  useUpdateAddressMutation,
} = shippingAddressApi;
