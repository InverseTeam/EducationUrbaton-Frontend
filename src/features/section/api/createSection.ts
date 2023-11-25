import { ISection } from '@/shared/interface/section';
import { sectionApi } from './sectionApi';

const createSectionsApi = sectionApi.injectEndpoints({
    endpoints: (build) => ({
        createSection: build.mutation<ISection[], void>({
            query: () => ({
                url: '/sections/create/',
                method: 'POST',
               
            }),
           
        }),
    }),
    overrideExisting: false,
});

export const { useCreateSectionMutation } = createSectionsApi;
