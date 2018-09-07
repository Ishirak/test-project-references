/**
 * The 'backup-server' module contains an example of an interface (models/User.ts)
 * and functionality (utils/userUtils.ts). Note how this file _must_ export those.
 * 
 * In user-portal, they are imported as:
 * 
 *   - import { User } from 'backup-server';
 *   - import { printUser } from 'backup-server';
 * 
 * _not_ like this:
 * 
 *   - import { User } from 'backup-server/models/User';
 *   - import { printUser } from 'backup-server/utils/userUtils';
 * 
 */

export * from './models/User';
export * from './utils/userUtils';
