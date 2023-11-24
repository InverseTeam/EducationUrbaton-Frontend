import { Layout } from '@/shared/layout/page';
import styles from './ui.module.scss';
import { Title } from '@/entities/pageTitle';
import { FlowCard } from '@/features/flowCard';

export const Flows = () => {
    return (
        <>
            <Layout>
                <Title>Заявки</Title>
                <FlowCard />
            </Layout>
        </>
    );
};
