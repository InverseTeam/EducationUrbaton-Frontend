import { ISection } from '@/shared/interface/section';
import { sectionApi } from './sectionApi';

const getSectionApi = sectionApi.injectEndpoints({
    endpoints: (build) => ({
        getAllSections: build.query<ISection[], void>({
            query: () => ({
                url: '/sections/',
                method: 'GET',  
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                },
            }),

            // providesTags: (result) =>
            // result
            //     ? [
            //           ...result.map(({ id }) => ({ type: 'Sections', id })),
            //           { type: 'Sections', id: 'LIST' },
            //       ]
            //     : [{ type: 'Sections', id: 'LIST' }],
        }),

        getSection: build.query<ISection[], number>({
            query: (id) => ({
                url: `/sections/${id}`,
                method: 'GET',
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetAllSectionsQuery, useGetSectionQuery } = getSectionApi;
