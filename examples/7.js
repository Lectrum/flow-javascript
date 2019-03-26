/* @flow */

/**
 * С помощью вертикального символа «/» можно объявить union type.
 * Union type похож на оператор ИЛИ в JavaScript, только для типов.
 */
const stringify = (value: string | number) => {
    return String(value);
};

stringify('Hello');
stringify(43);
stringify([ 4, 5, 6 ]);
