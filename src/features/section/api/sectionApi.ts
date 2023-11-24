import { BASE_API } from '@/shared/constants';
import { ISection } from '@/shared/interface/section';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sectionApi = createApi({
    reducerPath: 'section',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API,
        headers: {
            Authorization: `Token ${
                typeof window !== 'undefined' ? localStorage.getItem('token') : ''
            }`,
        },
    }),

    tagTypes: ['SectionData'],

    endpoints: () => ({}),
});

