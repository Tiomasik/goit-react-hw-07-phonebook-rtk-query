import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63dfca3c59bccf35dab9b927.mockapi.io/contacts' }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    fetchAll: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
     addContact: builder.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
       }),
       invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
})

export const { useFetchAllQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi