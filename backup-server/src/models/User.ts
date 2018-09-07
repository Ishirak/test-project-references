export interface User {
    firstName: string;
    lastName?: string;
}

export function printUser(user: User) {
    console.log('First name: ' + user.firstName);
}
