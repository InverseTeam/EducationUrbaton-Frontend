'use client';

import { Layout } from '@/shared/layout/page';
import styles from './ui.module.scss';
import { Title } from '@/entities/pageTitle';
import { FlowCard } from '@/features/flowCard';
import { FlowModal } from '@/features/flowModal';
import { useState } from 'react';
import { useGetAllFlowsQuery } from '@/features/flows/api';
import { IFlow } from '@/shared/interface/flows';

export const Flows = () => {
    const { data: FlowData, isLoading } = useGetAllFlowsQuery();

    console.log(FlowData);

    if (isLoading) {
        return <>Loading...</>;
    }

    //TODO: сделать компонент loading

    const sortedFlowData = FlowData && [...FlowData].sort((a, b) => (a.approved === b.approved ? 0 : a.approved ? -1 : 1)).reverse();;

    return (
        <>
            <Layout>
                <Title>Заявки</Title>

                {sortedFlowData && sortedFlowData.map((flow) => (flow.open || flow.approved) && <FlowCard flow={flow} />)}
            </Layout>
        </>
    );
};
