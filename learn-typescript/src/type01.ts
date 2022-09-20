// 1、类型声明

// 声明后赋值
let a: number;
a = 10;

// 声明同时赋值
let b: number = 11;

// 给参数及返回值指定类型
function sum(a: number, b: number): number {
    return a + b
}

// 不指定类型直接赋值时，typescript会根据值进行类型推断
let c = 111;

// 使用字面量进行类型声明1：指定变量d的类型为10，则d只能赋值10
let d: 10;

// 使用字面量进行类型声明2：指定变量e的类型为'male'或者'female'，则e只能赋值'male'和'female'
let e: 'male' | 'female';

// 联合类型
let f: number | string;

// any类型，表示任意类型，可赋值任意类型的值。any类型的变量可赋值给任意类型的变量。如果声明时不指定类型，则默认为any
let g: any;

// unknown，表示未知类型的值，可赋值任意类型的值。但是unknown类型的变量不可赋值给其他类型的变量。
let h: unknown;
h = 10

// 类型断言，用于告诉解析器变量的类型
let i: number;
i = h as number; // 写法一
i = <number>h // 写法二

// void类型，空类型。一般用于对函数返回值指定的类型
function fn1(): void {}

// never类型，表示永远不会返回结果。
function fn2(): never {
    throw new Error('报错')
}
