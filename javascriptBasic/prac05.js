let cars = ["sonata","bmw"]; 

for(car of cars) {
    console.log(car);
}

for(let i = 0; i<cars.length; i++){
    let car = cars[i]
    console.log(car);
}

cars.map((car)=>{
    console.log(car);
});


//in Java
//for(String a : StringArray)