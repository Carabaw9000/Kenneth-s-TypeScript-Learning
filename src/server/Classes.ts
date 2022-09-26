type Sex = 'Male' | 'Female'
let test = "Test"; // Type is now string

class Human {
    // fields creates public writable property. unless it is readonly
    name: string; 
    age: number;
    sex: Sex;
    readonly IQ: number = math.random(1,10);
    size: any; // type annotation is optional if not specified will be any
    eyes: number = 2; // initializers runs automatically if class is instantiated. 
    legs = 0; // just like const, var and let this initializers will be used to infer its type. This will be number type
    strictPropertyInitialization: boolean; // "strictPropertyInitialization":true  add to tsconfig.json change to false if you don't want to forced to have field initialized in constructor
    mustInitialized!: boolean;

    sayHello(){
        print("Hello")
    }

    constructor(name: string, age: number, sex: Sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
        // this.mustInitialized = true;
    }
}

const John: Human = new Human("John", 45, 'Male')
const Sally: Human = new Human("Sally", 30, 'Female')

// John.legs = ""; // Error is number
John.sayHello();