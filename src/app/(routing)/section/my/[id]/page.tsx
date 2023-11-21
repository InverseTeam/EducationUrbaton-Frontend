import { SectionView } from "@/widgets/sectionView";

export default function Page({ params }: { params: { id: number } }) {
    return (
        <>
            <SectionView id={params.id} />
        </>
    );
}
