import { User } from 'backup-server';
import { printUser } from 'backup-server';


interface MyUser extends User {
    age: number;
}

const user: MyUser = {
    firstName: 'Johnny',
    age: 20,
}

printUser(user);
