import { getAccessToken } from '@/shared/authHelpers/auth';
import { BASE_API } from '@/shared/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sectionApi = createApi({
    reducerPath: 'section',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API,
        headers: {
            Authorization: `Token ${typeof window !== 'undefined' ? getAccessToken() : ''}`,
        },
    }),

    tagTypes: ['SectionData'],

    endpoints: () => ({}),
});
