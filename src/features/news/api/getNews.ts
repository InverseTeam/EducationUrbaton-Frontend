    import { getAccessToken } from '@/shared/authHelpers/auth';
    import { newsApi } from './newsApi';
    import { INews } from '@/shared/interface/news';

    const getNewsApi = newsApi.injectEndpoints({
        endpoints: (build) => ({
            getAllNews: build.query<INews[], void>({
                query: () => ({
                    url: '/news/',
                    method: 'GET',
                    headers: {
                        Authorization: `Token ${getAccessToken()}`,
                    },
                }),

                providesTags: (result) =>
                    result
                        ? [
                            ...result.map(({ id }) => ({ type: 'News' as const, id })),
                            { type: 'News', id: 'LIST' },
                        ]
                        : [{ type: 'News', id: 'LIST' }],
            }),
        }),
        overrideExisting: false,
    });

    export const { useGetAllNewsQuery } = getNewsApi;
