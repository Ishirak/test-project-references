import { User } from '../../../backup-server/src/models/User';
import { User as AbsUser } from '@vp/backup-server';
import { Account } from '../../../platform-api/src/models/Account';

export interface BankUser extends User {
    amount: number;
}

export interface AbsBankUser extends AbsUser {
    abs: boolean;
}

export interface Bank {
    name: string;
    accounts: Account[];
}