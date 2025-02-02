import { baseApi } from "../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: ({ searchTerm, page, limit, category }) => ({
        url: `/blogs?searchTerm=${searchTerm}&page=${page}&limit=${limit}&category=${category}`,
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),
    getFeaturedBlogs: builder.query({
      query: () => ({
        url: `/blogs/featured`,
        method: "GET",
      }),
    }),
    getBlogById: builder.query({
      query: ({ id }: { id: string }) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetFeaturedBlogsQuery,
  useGetBlogByIdQuery,
} = blogApi;
