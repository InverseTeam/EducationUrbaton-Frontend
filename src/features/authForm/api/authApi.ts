import { IToken,IAuth } from '@/shared/interface/auth.interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'login',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://inverse-tracker.ru/api' }),
  endpoints: (build) => ({
    authUser: build.mutation<IToken, IAuth>({
      query: (userData) => ({
        url: `/users/auth/token/login/`,
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useAuthUserMutation } = authApi;
