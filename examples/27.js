/* @flow */

/**
 * С помощью интерфейсов можно структурно типизировать классы.
 */
interface Greeter {
    greet(): string;
}

class Foo {
    greet() {
        return 'Hello Foo!';
    }
}

class Bar {
    greet() {
        return 'Hello Bar!';
    }
}

const foo: Greeter = new Foo();
const bar: Greeter = new Bar();
