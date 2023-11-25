import { ISection } from '@/shared/interface/section';
import { getAccessToken } from '@/shared/authHelpers/auth';
import { flowsApi } from './flowsApi';
import { IFlow } from '@/shared/interface/flows';

const getFlowsApi = flowsApi.injectEndpoints({
    endpoints: (build) => ({
        getAllFlows: build.query<IFlow[], void>({
            query: () => ({
                url: '/sections/applications/my/',
                method: 'GET',
                headers: {
                    Authorization: `Token ${getAccessToken()}`,
                },
            }),

            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Flows' as const, id })),
                          { type: 'Flows', id: 'LIST' },
                      ]
                    : [{ type: 'Flows', id: 'LIST' }],
        }),
    }),
    overrideExisting: false,
});

export const { useGetAllFlowsQuery } = getFlowsApi;
