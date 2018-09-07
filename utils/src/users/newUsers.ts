import { User } from '@test-pr/print-server';

export function getNewUser(): User {
    return {
        firstName: 'Mary',
        lastName: 'Adams',
        age: 25,
    };
}