/* @flow */

class Entity<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const entity1: Entity<string> = new Entity('Hello!');
const entity2: Entity<number> = new Entity(44);
