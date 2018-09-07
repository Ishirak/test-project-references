import { Organization, User } from '../interfaces';

export function printUser(user: User) {
    console.log(`User: ${JSON.stringify(user)}`);
}

export function printOrganization(organization: Organization) {
    console.log(`Organization:\n\tname: ${organization.name}\n\tusers:${JSON.stringify(organization.users)}`);
}