import { User } from './models/User';

const user = new User({name: 'name', age: 44});

console.log(

user.get('name')
);


user.on('change', () => {
    console.log('user was changed');
});

user.set({name: 'New name'});

console.log(user.get('name'));
