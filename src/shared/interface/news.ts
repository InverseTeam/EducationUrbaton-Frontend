import { User } from './user';

export interface INews {
    id: number;
    user?: User;
    time?: string;
    data?: string;
    message: string;
}
