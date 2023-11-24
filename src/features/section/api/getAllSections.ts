import { ISection } from '@/shared/interface/section';
import { sectionApi } from './sectionApi';

const getAllSectionsApi = sectionApi.injectEndpoints({
    endpoints: (build) => ({
        getAllSections: build.query<ISection[], void>({
            query: () => '/sections/',
            providesTags: ['SectionData'],
        }),
    }),
    overrideExisting: false,
});

export const { useGetAllSectionsQuery } = getAllSectionsApi;
