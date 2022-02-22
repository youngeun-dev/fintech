// 배열을 배우는 이유 : 데이터를 단순하게 object형으로 모두 표현 가능
// -> 그러기에는 성능도 떨어지고 사용하기도 불편해 
// 연속된 데이터, 비슷한 데이터를 받아내기 위함

let car01 = "sonata";
let car02 = "bmw";
let car03 = "tesla";

let car = {
    name : "sonata",
    ph : 200,
    start : () => {
        console.log("engine start");
    },
    stop : () => {
        console.log("engine stop");
    }
}

let cars = [car01, car02, 392, car]; 
// 다른 type도 가능
// 선언할 때 배열 크기도 안정해줘도 됨

console.log(cars);
console.log(cars[0]); // 배열 접근법 


//---------------------------------------------
//in Java
//String [] cars = new array[3];
//--> 넘치면 overflow 발생
//ArrayList<String> stringArray = new ArrayList<String>