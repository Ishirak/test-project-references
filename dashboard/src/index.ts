import { printOrganization, printUser } from '@test-pr/print-server';
import { getNewOrganization, addOrganizationMembers, getNewUser } from '@test-pr/utils';

const org1 = getNewOrganization();
const org2 = getNewOrganization();

const user1 = getNewUser();
const user2 = getNewUser();
const user3 = getNewUser();

printOrganization(org1);
printOrganization(org2);

printUser(user1);
printUser(user2);
printUser(user3);

const org3 = addOrganizationMembers([ user1, user2 ]);

printOrganization(org3);
