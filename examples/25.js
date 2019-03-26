/* @flow */

/**
 * Синтаксис type alias можно применять вместе с синтаксисом generics.
 */
type human<T, A> = {
    name: T,
    age: A,
    pet?: T,
};

const Vova: human<string, number> = {
    name: 'Vova',
    age:  56,
};

const vitya: human<string, number> = {
    name: 'Vitya',
    age:  34,
    pet:  'snake',
};

const lena: human<string, number> = {
    name: 'Lena',
    age:  38,
};
