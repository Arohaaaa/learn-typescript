// object类型
// 可指定对象所包含的属性及属性的类型，可使用？号标识可选属性
let a: { name: string, age?: number };
a = { name: 'aroha', age: 10 }
a = { name: 'aroha' }
// 可通过[propName:string]: any对对象属性进行扩展
let b: { name: string, [propName: string]: any } // 表示对象至少有一个字符串类型的name属性，另外可包含其他任意类型的属性
b = { name: 'aroha', a: 1, b: '2' }

// function类型
// 可指定函数参数类型和返回值类型
let c: (a: number, b: number) => number
c = function(n1: number, n2: number) {
    return n1 + n2
}

// array类型
// 可指定存储元素的类型
let d: string[]; // 写法一 表示只可以存储字符串类型的值
let e: Array<string>; // 写法二

// tuple类型，元组，固定长度的数组
let g: [string, string]

// enum类型，枚举。
enum Gender {
    Male,
    Female
}

//  类型别名
type myType = 1 | 2 | 3
let h: myType;
let i: myType;
