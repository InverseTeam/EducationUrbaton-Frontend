import { SectionChange } from '@/widgets/sectionChange';

export default function Edit({ params }: { params: { id: number } }) {
    return (
        <>
            <SectionChange id={params.id} />
        </>
    );
}
