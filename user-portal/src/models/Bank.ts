import { User } from '../../../backup-server/src/models/User';
import { Account } from '../../../platform-api/src/models/Account';

export interface BankUser extends User {
    amount: number;
}

export interface Bank {
    name: string;
    accounts: Account[];
}