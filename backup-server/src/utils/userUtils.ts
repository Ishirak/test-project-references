import { User } from '../models/User';

export function printUser(user: User) {
    console.log('First name: ' + user.firstName);
}
