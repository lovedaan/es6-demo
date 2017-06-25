/*
 * @Author: Marte
 * @Date:   2017-06-25 09:47:30
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-06-25 10:01:26
 */

'use strict';
/*
 *let具有块级作用域，在一对大括号包住的区域都是块级
 *let在块级定义，出了这个块级作用域去引用就会报错
 *用let声明过的变量名不能再次用let声明
 */
function test() {
    let a = 1;

    /*for (let i = 1; i < 3; i++) {
        console.log(i);
    }

    console.log(i);*/ //执行到这句代码的时候报错 ReferenceError: i is not defined

    // let a = 2;
    // let a = 1;   //Duplicate declaration 'a'
}

test();

function last() {
    const PI = 3.1415926;
    //PI = 6;
    console.log(PI);
}
last();