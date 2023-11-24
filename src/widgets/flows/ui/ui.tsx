'use client';

import { Layout } from '@/shared/layout/page';
import styles from './ui.module.scss';
import { Title } from '@/entities/pageTitle';
import { FlowCard } from '@/features/flowCard';
import { FlowModal } from '@/features/flowModal';
import { useState } from 'react';

export const Flows = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    return (
        <>
            {modalOpen && <FlowModal setModalOpen={() => setModalOpen(false)} />}
            <Layout>
                <Title>Заявки</Title>
                <FlowCard setModalOpen={setModalOpen} />
            </Layout>
        </>
    );
};
