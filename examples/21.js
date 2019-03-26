/* @flow */

class Human {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

const human: Human = new Human('Vova');
