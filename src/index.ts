import { User } from './models/User';

const user = new User({id: 1});

user.fetch();

setTimeout(() => {
    console.log(user.get('age'))
    console.log(user.get('name'));
}, 3000)

