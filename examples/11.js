/* @flow */

/**
 * Пример типизированного объекта.
 */
const user: {
    name: string,
    age: number,
} = {
    name: 'Vasyl',
    age:  25,
};

/**
 * Flow защищает разработчика от источника
 * одной из самых распространённых ошибок.
 */
const name = user.namee;
