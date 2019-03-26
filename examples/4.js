/* @flow */

/**
 * В JavaScript существует 6 типов данных.
 * Flow поддерживает все кроме типы кроме символов (пока-что).
 */
const a: number = 37;
const b: string = 'welcome!';
const c: string = 'welcome!' + 784; // приведётся к строковому значения 'welcome!784'
const d: null = null;
const e: void = undefined;
const f: boolean = true;
const g: boolean = !'welcome!'; // приведётся к булевому значению false
const h: boolean = 0; // тип данных number
