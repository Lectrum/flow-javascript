/* @flow */

/**
 * Синтаксис Generics позволяет более удобно описывать повторяющиеся типы.
 * Этот синтаксис в чём-то напоминает переменные, только для типов.
 */

const identity = <T>(value: T): T => {
    return value;
};

const a = identity(2);
const b = identity('3');
