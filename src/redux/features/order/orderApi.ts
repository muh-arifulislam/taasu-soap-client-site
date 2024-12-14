import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (payload: { data: any; method: string }) => ({
        url: `/orders/place-order/${payload.method}`,
        method: "POST",
        body: payload.data,
      }),
      invalidatesTags: ["orders"],
    }),
    getMyOrders: builder.query({
      query: () => ({
        url: "/orders/me",
        method: "GET",
      }),
      providesTags: ["orders"],
    }),
    getOrderById: builder.query({
      query: (id: string) => ({
        url: `/orders/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  usePlaceOrderMutation,
  useGetMyOrdersQuery,
  useGetOrderByIdQuery,
} = orderApi;
