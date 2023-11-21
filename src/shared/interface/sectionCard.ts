import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface Section {
    id: number;
    title: string;
    image: string | StaticImport;
    category: string;
    groups?: SectionGroup[] | undefined;
}

export interface SectionGroup {
    id: number;
    title: string;
}
