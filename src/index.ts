import {User} from './models/User';

const user = User.buildUser({name: 'John Deer', age: 120});

user.on('save', () => {
    console.log(user);
});

user.save();

