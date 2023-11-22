import { NewGroupModal } from '@/widgets/newGroupModal';

export default function Create({ params }: { params: { id: number } }) {
    return (
        <>
            <NewGroupModal />
        </>
    );
}
