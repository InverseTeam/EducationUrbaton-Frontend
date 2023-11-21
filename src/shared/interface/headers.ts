import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface SideNavItem {
    title: string;
    path: string;
    icon?: string | StaticImport;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
}
