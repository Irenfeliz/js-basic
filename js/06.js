/*
6.  Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

'use strict';

for (let x = 1; x <= 20; x++) {
    console.log("x".repeat(x));
}