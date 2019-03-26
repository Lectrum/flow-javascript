/* @flow */

/**
 * refinement — это когда мы передаём в функцию любой тип,
 * а отдаём из неё какой-то определённый в зависимости от условий.
 */
const stringify = (value: mixed): string | null => {
    if (typeof value !== 'string') {
        return String(value);
    }

    console.log('A value is already a string');

    return null;
};

const a = stringify('Welcome!');
const b = stringify(4);
