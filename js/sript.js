'use strict';

//задание 1 
let tC = +prompt("Введите температуру по Цельсию: ");
let tF = (9/5)*tC+32;

alert("Температура по Фаренгейту: " + tF);

//задание 2
let admin;
let name = "Василий";
admin = name;

alert(admin);

//задание 3
//10 + 10 + "10";
/*
1. 10 плюс 10 получаем 20, тип число
2. 20 + "10", 20 преобразовываем в строку 
3. "20" плюс  "10" получаем "2010"
4. "2010" присваеваем в переменную result
5. c помощью console.log выводим result1 в консоль 
*/
let result1 = 10 + 10 + "10";
console.log(result1);

//10 + "10" + 10;
/*
1. 10 преобразовываем в строку -"10"
2. "10" + "10" получаем строку "1010"
3. "1010" + 10 - 10 преобразовываем в строку "10" получаем "101010"
4. "101010" присваеваем в переменную result
5. c помощью console.log выводим result2 в консоль 
*/
let result2 = 10 + "10" + 10;
console.log(result2);

//10 + 10 + +"10";
/*
1. 10 + 10 - числа получаем 20
2. +"10" - унарный плюс перед строкой, преобразовываем в число, получаем 10
3. 20 + 10 получаем 30
4. 30 присваеваем в переменную result
5. c помощью console.log выводим result3 в консоль 
*/
let result3 = 10 + 10 + +"10";
console.log(result3);

// 10 / -"";
/*
1. по приоритету сначала рассматриваем унарный минус -"" - дает -0
2. далее оператор деления 10 / -0 отдает -Infinity 
3. -Infinity присваеваем в переменную result
5. c помощью console.log выводим result4 в консоль 
*/
let result4 = 10 / -"";
console.log(result4);

// 10 / +"2,5";
/* 
1. по приоритету смотрим на унарный плюс +"2,5" не можем приобразовать в число, т.к. 2,5 написано через запятую, а не через точку 
2. +"2,5" не является числом - остается строкой 
3. при делении числа на строку 10 / "2,5" получаем не число - NaN
3. NaN присваеваем в переменную result
5. c помощью console.log выводим result5 в консоль 
*/
let result5 = 10 / +"2,5";
console.log(result5);