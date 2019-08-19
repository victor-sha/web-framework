import { User } from './models/User';

const user = new User({ name: 'John', age: 23 });
user.set({ name: 'Join3' });

console.log(user.get('name'));
console.log(user.get('age'));
