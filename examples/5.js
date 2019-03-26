/* @flow */

/**
 * Типы с приставкой «?», например ?string называют maybe type.
 * Maybe types опциональные, а также могут быть null или undefined.
 */
const getGreeting = (name: ?string): string => {
    return name ? `Hello, ${name}!` : 'Hello, user!';
};

getGreeting();
getGreeting(null);
getGreeting(undefined);
getGreeting('Kate');
