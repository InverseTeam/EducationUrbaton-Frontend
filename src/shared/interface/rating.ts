import { User } from './user';

export interface IRating {
    id: number;
    rating: number;
    user: User; // TODO: change to IUser
    points: number;
}
