import { User } from '../../../backup-server/src/models/User';

export interface Account extends User {
    id: string;
    owner: string;
}