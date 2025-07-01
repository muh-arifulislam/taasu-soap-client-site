/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

//https://taasu-soap-backend.vercel.app/api/v1
//http://localhost:5000/api/v1

const baseQuery = fetchBaseQuery({
  baseUrl: "https://taasu-soap-backend.vercel.app/api/v1",
  credentials: "include",
  prepareHeaders: (headers: Headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", token as string);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["product", "user", "orders", "shippingAddress", "blogs"],
  endpoints: () => ({}),
});
