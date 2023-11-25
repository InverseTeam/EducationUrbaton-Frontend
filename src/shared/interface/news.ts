import { IUser, User } from './user';

export interface INews {
    id?: number;
    author?: IUser;
    timedate?: string;
    content: string;
    tag: number;
}
