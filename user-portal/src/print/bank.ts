import { Bank } from '../models/Bank';
import { getFromDiffPackage } from '@vp/backup-server';

export function printBank() {
    const bank: Bank = {
        accounts: [],
        name: 'Bank'
    };

    console.log(bank);
    console.log(getFromDiffPackage());
}