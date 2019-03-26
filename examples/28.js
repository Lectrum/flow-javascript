/* @flow */

/**
 * С помощью implements можно структурно типизировать классы.
 */
interface Greeter {
    greet(): string;
}

class Foo implements Greeter {
    greet() {
        return 'Hello Foo!';
    }
}

class Bar implements Greeter {
    greet() {
        return 476;
    }
}
