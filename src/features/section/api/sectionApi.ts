import { BASE_API } from '@/shared/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const sectionApi = createApi({
    reducePath: 'section',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API,
        headers: {
            Authorization: `Token ${
                typeof window !== 'undefined' ? localStorage.getItem('token') : ''
            }`,
        },
    }),

    tagTypes: ['SectionData'],

    endpoint: () => ({}),
});
