/* @flow */

const getGreeting = (name: string = 'User'): string => {
    return `Hello, ${name}!`;
};

getGreeting();
getGreeting(null);
getGreeting(undefined);
getGreeting('Kate');
