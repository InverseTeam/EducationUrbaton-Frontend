import { SectionView } from '@/widgets/sectionView';

export async function generateStaticParams() {
    const posts = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }]; // только пример для проверки работоспособности
    //TODO: написать запрос на получение всех секций для получения всех id секций
    return posts.map((post) => ({
        id: post.id,
    }));
}

export default function OneSection({ params }: { params: { id: number } }) {
    return (
        <>
            <SectionView id={params.id} />
        </>
    );
}
