import { User } from './user';

export interface Rating {
    id: number;
    rating: number;
    user: User;
    points: number;
}
