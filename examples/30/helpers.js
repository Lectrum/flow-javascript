/* @flow */
import type { person } from './types';

const getName = (object: person): string => {
    return object.name;
};

getName({
    name:  'Vova',
    age:   '25',
    alive: true,
});
