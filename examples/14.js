/* @flow */

/**
 * Синтаксис с вертикальными символами позволяет описать exact object type.
 * В отличии от обычных объектов, в exact object type не может быть
 * непокрытых типами свойств.
 */
const user: {|
    name: string,
|} = {
    name: 'Vasyl',
    age:  25,
};
