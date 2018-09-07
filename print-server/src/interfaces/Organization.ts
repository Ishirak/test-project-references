import { User } from '.';

export interface Organization {
    name: string;
    users: User[];
}