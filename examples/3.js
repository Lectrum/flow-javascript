/* @flow */

/**
 * Автоматическое выведение типов можно ограничивать.
 */
const add = (operand1: number, operand2: number): number => {
    return operand1 + operand2;
};

const result1 = add(3, 4);
const result2: string = add('hello ', 'world!');
