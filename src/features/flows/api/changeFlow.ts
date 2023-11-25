import { ISection } from '@/shared/interface/section';
import { getAccessToken } from '@/shared/authHelpers/auth';
import { INews } from '@/shared/interface/news';
import { flowsApi } from '.';
import { IFlow } from '@/shared/interface/flows';

const changeFlowApi = flowsApi.injectEndpoints({
    endpoints: (build) => ({
        confirmFlow: build.mutation<IFlow, number>({
            query: (id) => ({
                url: `/sections/applications/${id}/confirm/`,
                method: 'PATCH',
                headers: {
                    Authorization: `Token ${getAccessToken()}`,
                },
            }),

            invalidatesTags: [{ type: 'Flows', id: 'LIST' }],
        }),
        refuseFlow: build.mutation<IFlow, number>({
            query: (id) => ({
                url: `/sections/applications/${id}/refuse/`,
                method: 'PATCH',
                headers: {
                    Authorization: `Token ${getAccessToken()}`,
                },
            }),
            invalidatesTags: [{ type: 'Flows', id: 'LIST' }],
        }),
    }),
    overrideExisting: false,
});

export const { useConfirmFlowMutation, useRefuseFlowMutation } = changeFlowApi;
