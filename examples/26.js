/* @flow */

/**
 * Объекты во Flow типизированы структурно (structural typing).
 */
type ObjType = { property: string };
let obj = { property: 'value' };
let test: ObjType = obj;

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

const test: Foo = new Bar();
