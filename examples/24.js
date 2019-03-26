/* @flow */

/**
 * Часто использующийся тип можно вынести в отдельную декларацию.
 * Такую декларацию называют type alias.
 */
type human = {
    name: string,
    age: number,
    pet?: string,
};

const Vova: human = {
    name: 'Vova',
    age:  56,
};

const vitya: human = {
    name: 'Vitya',
    age:  34,
    pet:  'snake',
};

const lena: human = {
    name: 'Lena',
    age:  38,
};
