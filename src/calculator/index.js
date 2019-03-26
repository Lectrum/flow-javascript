import { add } from './math.js';

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const button = document.getElementById('button');
const result = document.getElementById('result');

const calculate = () => {
    const a = parseInt(input1.value, 10);
    const b = parseInt(input2.value, 10);
    result.value = String(add(a, b));
};

button.addEventListener('click', calculate);
