import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TClientsState } from "@/api/_types";
import { REHYDRATE } from "redux-persist";

/**
 * clientsApi()
 *
 * Clients uses RTK Query to "query" for data in our database.
 * @link https://redux-toolkit.js.org/rtk-query/usage/mutations
 * @link https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#editing-posts
 */
export const clientsApi = createApi({
  reducerPath: "clientsApi",

  // Base URL for all requests.
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8800/"
  }),

  extractRehydrationInfo: (action, { reducerPath }) => {
    if (action.type === REHYDRATE && action.payload) {
      return action.payload.clientsApi;
    }
  },

  // Allows automatic refreshing of data.
  // @link https://redux-toolkit.js.org/rtk-query/usage/automated-refetching
  tagTypes: ["Clients"],

  // The "endpoints" represent operations and requests for this server.
  endpoints: (builder) => ({
    // Get a list of clients.
    getClientsList: builder.query<any, void>({
      query: () => "/clients",
      providesTags: [{ type: "Clients", id: "LIST" }]
    })
  })
});

export const { useGetClientsListQuery } = clientsApi;
