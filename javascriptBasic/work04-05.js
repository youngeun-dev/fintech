let car1 = {
    name : "sonata",
    ph : 200,
    start : () => {
        console.log("engine start");
    },
    stop : () => {
        console.log("engine stop");
    }
}

let car2 = {
    name : "bmw",
    ph : 300,
    start : () => {
        console.log("engine start");
    },
    stop : () => {
        console.log("engine stop");
    }
}

let car3 = {
    name : "tesla",
    ph : 400,
    start : () => {
        console.log("engine start");
    },
    stop : () => {
        console.log("engine stop");
    }
}

let cars = [car1, car2, car3]

// 배열 내 bmw라는 이름을 가진 차량이 존재 할 때 "차량이 있습니다" 텍스트를 출력
cars.map((car)=>{
    if(car.name === "bmw"){
        console.log(car.name + " 차량이 있습니다");
    }else{
        console.log("bmw 차량이 없습니다");
    }
});