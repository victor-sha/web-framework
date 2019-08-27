import { User } from './models/User';

const user = new User({ name: 'John', age: 23 });
user.set({ name: 'Join3' });

user.on('hello', () => {
  console.log('Hello event');
});

user.trigger('hello');
