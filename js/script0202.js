"use strict";

//задание 3
/*Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;*/

let a = +prompt("введите любое число");
let b = +prompt("введите любое число");
let result;

if (a >= 0 && b >= 0) {
    result = a - b;
    alert("разность этих чисел:" + result);
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    result = a + b;
    alert("сумма этих чисел: " + result);
} else {
    result = a * b;
    alert("произведение этих чисел: " + result);
}

//задание 4
/*Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. Т.е. например, 
функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.*/

//сумма чисел (значения задаются из предыдущего задания)
function sum(a, b) {
    return a + b;
}

let x = sum(a, b);
console.log("Сумма чисел a и b равна " + x);

//разность чисел
function diff(a, b) {
    return a - b;
}
let y = diff(a, b);
console.log("Разность чисел a и b равна " + y);

//произведение
function prod(a, b) {
    return a * b;
}
let z = prod(a, b);
console.log("Произведение чисел a и b равно " + z);

//деление
//произведение
function div(a, b) {
    return a / b;
}
let o = div(a, b);
console.log("Частное чисел a и b равно " + Math.round(o*100)/100);
