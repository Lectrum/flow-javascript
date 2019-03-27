/* @flow */

const user: {
    name: string,
    age: number,
    pet: string,
} = {
    name: 'Vasyl',
    age:  25,
};

user.pet = 'cat';
user.pet = undefined;
user.pet = 4;
user.pet = null;
