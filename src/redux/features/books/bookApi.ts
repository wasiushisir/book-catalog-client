import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),

    getSingleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),

    postBook: builder.mutation({
      query: (data) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    postWish: builder.mutation({
      query: (data) => ({
        url: "/wish",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    postBookList: builder.mutation({
      query: (data) => ({
        url: "/bookList",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    postComment: builder.mutation({
      query: (data) => ({
        url: "/review",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    getWishes: builder.query({
      query: () => "/wishes",
      providesTags: ["books"],
    }),
    getBookList: builder.query({
      query: () => "/bookList",
      providesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  usePostBookMutation,
  usePostWishMutation,
  useGetWishesQuery,
  usePostCommentMutation,
  usePostBookListMutation,
  useGetBookListQuery,
} = bookApi;
