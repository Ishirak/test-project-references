import { Bank } from '../models/Bank';

export function printBank() {
    const bank: Bank = {
        accounts: [],
        name: 'Bank'
    };

    console.log(bank);
}