import { Bank } from '../models/Bank';

export function printBank() {
    const bank: Bank = {
        name: 'Moneta'
    };

    console.log(bank);
}