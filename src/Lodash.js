import { compose, pipe } from "lodash/fp";

let input = "    Javascript   ";
let output = "<div>" + input.trim() + "</div>";

const fnTrim = (str) => str.trim();
const fnWrapDiv = (str) => `<div>${str}</div>`;
const fnWrapSpan = (str) => `<span>${str}</span>`;
const fnLowerCase = (str) => str.toLowerCase();

const result = fnWrapDiv(fnLowerCase(fnTrim(input)));

// Using lodash: Right to left, and Left to right
// const transform = compose(fnWrapDiv, fnLowerCase, fnTrim);
// const transform = pipe(fnTrim, fnLowerCase, fnWrapDiv);
// transform(input);

// Using a parameter to fill element type
// const fnWrap = (type, str) => `<${type}>${str}</${type}>`;

// function fnWrap(type) {
//     return function (string) {
//         return `<${type}>${str}</${type}>`;
//     };
// }

const fnWrap = (type) => (string) => `<${type}>${string}</${type}>`;

//const transform = pipe(fnTrim, fnLowerCase, fnWrapSpan, fnWrapDiv);
const transform = pipe(fnTrim, fnLowerCase, fnWrap("span"), fnWrap("div"));
console.log(transform(input));
