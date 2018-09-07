import { Organization, User } from '@test-pr/print-server';

export function getNewOrganization(): Organization {
    return {
        name: 'Super organization',
        users: [],
    };
}

export function addOrganizationMembers(users: User[]): Organization {
    return {
        name: 'Blazing organization',
        users,
    };
}