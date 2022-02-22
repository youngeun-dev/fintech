// method, function 선언

// 옛 방식 --  아예 안 쓰는 건 아님
function test(p1, p2){
    return p1 + p2;
}

let result = test(5,5);
console.log(result);

// ES6 버전 -- Arrow Function
const plus = (p1, p2) => {
    return p1 + p2;
} 

const minus = (p1, p2) => {
    return p1 - p2
}

const multi = (p1, p2) => {
    return p1 * p2
}

const div = (p1, p2) => {
    console.log(this)
    return p1 / p2;
}

let a = plus(4,2);
let b = minus(4,2);
let c = multi(4,2);
let d = div(4,2);

console.log(a,b,c,d);