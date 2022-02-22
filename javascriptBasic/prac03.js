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

console.log(car.start); // 함수가 start 변수에 할당 
car.start();
console.log(car.name + "의 마력은 " + car.ph + "입니다.");
car.stop();