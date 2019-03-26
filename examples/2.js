/* @flow */

/**
 * Выведение типов, или type inference — одна из киллер-фич Flow.
 */
const add = (operand1, operand2) => {
    return operand1 + operand2;
};

const result1 = add(3, 4);
const result2 = add('hello ', 'world!');
