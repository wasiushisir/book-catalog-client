import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog2.onrender.com/",
    prepareHeaders: (headers) => {
      // Add the authentication token to the request headers
      // const token = getToken();

      headers.set(
        "authorization",
        `Bearer ${localStorage.getItem("accessToken")!}`
      );

      return headers;
    },
  }),
  tagTypes: ["books"],
  endpoints: () => ({}),
});
