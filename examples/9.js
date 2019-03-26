/* @flow */

/**
 * Тип mixed — особый, он описывает любой тип данных.
 */
const getTypeOf = (value: mixed): string => {
    return typeof value;
};

getTypeOf('Welcome!');
getTypeOf(4);
getTypeOf(true);
getTypeOf(null);
getTypeOf(undefined);
getTypeOf([ 1, 2, 3 ]);
