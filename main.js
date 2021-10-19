//1
class Car{
    numWheels;
    engineCapacity;
    color;

    constructor(numWheels,engineCapacity,color){
        this.numWheels=numWheels
        this.engineCapacity=engineCapacity
        this.color=color
    }
    getCarInfo(){
        return `${this.numWheels} ${this.engineCapacity} ${this.color}`;
    }
    static getObject(arr){
        let max=arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (max.engineCapacity<arr[i].engineCapacity) {
                max = arr[i];
            }
            
        }
        return max;
    }
}

let car1 = new Car(8,2000,"black")
console.log(car1.getCarInfo());


class Private extends Car{

    get getCarFunc(){
        return `${super.getCarInfo()} ${Private.name}`
    }
    giveName(){
        return `${Private.name.toUpperCase()}`
    }
    get getNameOfFunc(){
        return `${this.giveName()}`
    }
}

let private1= new Private(4,1000,"grey")
console.log(private1.getCarFunc);
console.log(private1.getNameOfFunc);

class Bus extends Car{
    get getCarFunc(){
        return `${super.getCarInfo()} ${Bus.name}`
    }
}
let bus1= new Bus(16,2500,"white")

class Truck extends Car{
    get getCarFunc(){
        return `${super.getCarInfo()} ${Truck.name}`
    }
}
let truck1= new Truck(10,2000,"red")

console.log(Car.getObject([car1,private1,bus1,truck1]));

let numOfWheels = document.getElementById("numOfWheels")
let engineCapacity = document.getElementById("engineCapacity")
let color = document.getElementById("color")
let selectCar = document.getElementById("selectCar")
let btn = document.getElementById("btn")