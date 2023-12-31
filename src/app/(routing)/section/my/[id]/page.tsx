


import { useGetAllSectionsQuery } from '@/features/section/api';
import { getAccessToken } from '@/shared/authHelpers/auth';
import { ISection } from '@/shared/interface/section';
import { SectionView } from '@/widgets/sectionView';

// export async function generateStaticParams() {
//     try {
//         const sections: ISection[] = await fetch('https://inverse-tracker.ru/api/sections/', {
//             method: 'GET',
//             headers: {
//                 Authorization: `Token ${getAccessToken()}`, //TODO: токен нету на момент сборки надо решать
//             },
//         })
//         .then((res) => res.json())
//         .catch((err) => {
//             console.error(err);
//             return [{id: '4'}];
//         });

//         console.log("build",sections);
//         return sections?.map((section: ISection) => ({
//             id: section.id.toString(),
//         })) || [{id: '4'}];
//     } catch (error) {
//         console.error(error);
//         return [{id: '4'}];
//     }
// }


export default function OneSection({ params }: { params: { id: number } }) {
    // console.log(SectionItems);

    return (
        <>

            <SectionView id={params.id} />
        </>
    );
}
