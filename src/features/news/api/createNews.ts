import { ISection } from '@/shared/interface/section';
import { getAccessToken } from '@/shared/authHelpers/auth';
import { newsApi } from './newsApi';
import { INews } from '@/shared/interface/news';

const createNewsApi = newsApi.injectEndpoints({
    endpoints: (build) => ({
        createNews: build.mutation<INews, INews>({
            query: (newsData) => ({
                url: '/news/create/',
                method: 'POST',  
                headers: {
                    Authorization: `Token ${getAccessToken()}`,
                },
                body: {...newsData}
            }),

            invalidatesTags: [{type: 'News', id: 'LIST'}]
        }),

    
    }),
    overrideExisting: false,
});

export const { useCreateNewsMutation } = createNewsApi;
