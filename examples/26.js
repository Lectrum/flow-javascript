/* @flow */

/**
 * Объекты во Flow типизированы структурно (structural typing).
 */
type ObjType = { property: string };
let obj = { property: 'value' };
let test1: ObjType = obj;

/**
 * Классы во Flow типизированы номинально (nominal typing).
 */
class Foo {
    serialize() {
        return '[Foo]';
    }
}

class Bar {
    serialize() {
        return '[Bar]';
    }
}

const test2: Foo = new Bar();
