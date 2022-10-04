type Sex = 'Male' | 'Female'
let test = "Test"; // Type is now string

export class Human {
    // fields creates public writable property. unless it is readonly
    name: string; 
    age: number;
    sex: Sex;
    readonly IQ: number; // Can be prefixed readonly this prevents assignments to field outside the constructor works like const but const is not in class
    size: any; // type annotation is optional if not specified will be any
    eyes: number = 2; // initializers runs automatically if class is instantiated. 
    legs = 0; // just like const, var and let this initializers will be used to infer its type. This will be number type
    // strictPropertyInitialization: boolean; // "strictPropertyInitialization":true  add to tsconfig.json change to false if you don't want to forced to have field initialized in constructor
    test?: string; // Optional
    mustInitialized!: boolean;

    sayHello(){
        print("Hello")
    }
    
    // There are just a few differences between class constructor signatures and function signatures:

    // Constructors can’t have type parameters - these belong on the outer class declaration, which we’ll learn about later
    // Constructors can’t have return type annotations - the class instance type is always what’s returned
    // Class construcetors are simular to functions, Parameters with type annotations. default values and Overloads. default value added to IQ
    constructor(name: string, age: number, sex: Sex, IQ = math.random(1,150)){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.IQ = IQ;
        // this.mustInitialized = true;
    }
}

const John: Human = new Human("John", 45, 'Male')
const Sally: Human = new Human("Sally", 30, 'Female')

// John.legs = ""; // Error is number
John.sayHello();

export class Man extends Human {
    //Super Calls
    // Just as in JavaScript, if you have a base class, you’ll need to call super(); in your constructor body before using any this. members:
    constructor(name: string, age: number){
        // this.legs = 5; // Error super must be called to use this.
        super(name, age, 'Male', math.random(1,200));
    }
}
