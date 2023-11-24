import { Profile } from '@/widgets/profile';

export default function Page({ params }: { params: { id: number } }) {
    return (
        <>
            <Profile />
        </>
    );
}
