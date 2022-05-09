import { mudoleName } from "./module";
import "./index.css";
// 异步引入
const { async } = import(/* webpackChunName:"sync" */ "./async");

console.log("hi, webpack, this is " + mudoleName + async);
