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

  tagTypes: ["Clients"], // Allows automatic refreshing of data.

  endpoints: (builder) => ({
    getClientsList: builder.query<any, void>({
      query: () => "/clients",
      providesTags: [{ type: "Clients", id: "LIST" }]
    }),

    getClient: builder.query({
      query: (clientId) => `/clients/${clientId}`,
      providesTags: [{ type: "Clients", id: "LIST" }]
    }),

    addNewClient: builder.mutation({
      query: (initialClient) => ({
        url: `/clients`,
        method: "POST",
        body: initialClient
      }),
      invalidatesTags: [{ type: "Clients", id: "LIST" }]
    })
  })
});

export const {
  useGetClientsListQuery,
  useGetClientQuery,
  useAddNewClientMutation
} = clientsApi;
