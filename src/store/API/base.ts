import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:5173";

const baseQuery = fetchBaseQuery({
  baseUrl: `${baseURL}/api`,
  prepareHeaders: (headers, { getState }) => {
    const token =
      (getState() as RootState).auth.user?.token ||
      localStorage.getItem("token");

    if (token && token !== null) {
      headers.set("authorization", `Bearer ${token}`);
    }
  },
});

export const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });
