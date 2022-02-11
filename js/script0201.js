'use strict';

//1 задание

//пример 1 
/* 
1) ++ - это инкремент, увеличение переменной a на единицу  
2) с = ++a = a + 1 = 1+1 = 2 
*/
let a = 1, b = 1, c, d; 
c = ++a; 
alert(c); // ответ: 2 

//пример 2 
/*
1) d присваевается значение b : d = 1
2) далее постфиксная форма добавляет к переменной b 1. 
3) b++ = b + 1 = 1 + 1 = 2
*/
d = b++; 
alert(d); //ответ: 1 

//пример 3 
/*
1) ++a префиксная форма - добавляет к переменной а 1.
2) ранее в первом примере переменной а уже было присвоено новое значение ++a = 2 - сохранено в памяти
3) поэтому в текущем примере берем значение а = 2, итого ++a = a + 1 = 2 + 1 = 3
4) с = 2 + 3 = 5 
*/
c = 2 + ++a; 
alert(c); //ответ: 5 

//пример 4 
/*
1) b++ -  постфиксная форма, добавляет к переменной 1. 
2) в примере 2 к переменной b уже была добавлена 1, и к текущему моменту значение b = 2 . 
3) d = 2 + b++ = 2 + 2 = 4 
4) далее постфиксная форма инкримента добавляет переменной b единицу:  b++ = b + 1 = 2 + 1 = 3
5) в первом примере инкримент переменной а: ++a = a + 1 = 1 + 1 = 2 , далее в третьем примере инкримент a : ++a = a + 1 = 2 + 1 = 3
Итог: 
a = 3
b = 3
d = 4

*/
d = 2 + b++; 
alert(d); //ответ: 4 

alert(a); //3 
alert(b); //3

//2 задание : Чему будут равны переменные x и a2 в примере ниже
/*
1) а2 присваивается значение 2
2) а2 *= 2 короткая запись от a2 = a2 * 2 = 2 * 2 = 4
3) x = 1 + 4 = 5
*/

let a2 = 2; 
let x = 1 + (a2 *= 2); // a2 = 4, x = 5
