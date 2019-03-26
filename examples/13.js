/* @flow */

/**
 * По-умолчанию объекты во Flow «запечатанные».
 * Это означает, что Flow не позволит добавлять в объект
 * не описанные типами свойства просто так.
 */
const user: {
    name: string,
    age: number,
    pet?: string,
} = {
    name: 'Vasyl',
    age:  25,
};

user.city = 'Berlin';
