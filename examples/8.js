/* @flow */

/**
 * Типы можно также задавать в буквальной форме.
 * Такая форма называется literal type.
 */
const multiplyByTwoOrThree = (value: number, multiplicator: 2 | 3) => {
    return value * multiplicator;
};

multiplyByTwoOrThree(4, 2); // 8
multiplyByTwoOrThree(2, 3); // 6
multiplyByTwoOrThree(8, 4); // нельзя
