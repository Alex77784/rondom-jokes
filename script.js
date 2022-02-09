
let a = Math.random();
console.log(a);

let b = Math.random() * 7 + 1;
console.log(b);

let c = Math.round(Math.random() * 7 + 1);
console.log(c);

function hello(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(hello(5, 7))