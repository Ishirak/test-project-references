import { Bank } from '../models/Bank';
import * as backup from 'backup-server/models/User';

export function printBank() {
    const bank: Bank = {
        accounts: [],
        name: 'Bank'
    };

    console.log(bank);
    console.log(backup.getFromDiffPackage());
}