import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder: { mutation: (arg0: { query: (data: any) => { url: string; method: string; body: any; }; }) => any; }) => ({
    createTodo: builder.mutation({
      query: (data: any) => ({
        url: '/todos',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateTodoMutation } = api;
export default api;