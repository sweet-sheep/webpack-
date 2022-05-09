// 示例1 普通打包
// console.log("hello webpack");

// 示例2 引入模块的打包
// import { a } from "./a";
// import { b } from "./b";

// console.log("hello webpack" + a + b);

// // const { b } = import(/* webpackChunName:"b" */ "./b");

// // console.log("hello webpack" + a);
// console.log("hello webpack" + a + b);

// 示例3 按需引入打包
// import { a } from "./a";
// import { c } from "./c.json";

// var { b } = import(/* webpackChunName:"b" */ "./b").then(({ b }) => {
//   console.log("hello webpack" + a + b);
// });

// console.log("hello webpack" + a + c + b);
