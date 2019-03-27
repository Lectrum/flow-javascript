/* @flow */

/* tuple (Кортеж) — это тип списка, в котором количество элементов ограничено. */
const tuple1: [number, string, boolean] = [ 1, '2', false ];

const tuple2: [number, string, boolean, null] = [ ...tuple1, null ];

tuple1.push(null);
