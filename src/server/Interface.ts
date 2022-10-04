// interface 
interface Car {
    engine: string;
    type: "Motorcycle" | "Car" | "Truck" | "Scooter" | "Bus"
    color?: string;
    kilometersDriven?: number;
    tintedWindows?: boolean;  
}

// For every key there must be a specific type
interface Truck {
   [name: string]: Car 
}
interface Bus {
   [age: number]: Car
}

const truck: Truck = {
    fieldTest: { // for every field that is string should be type car
        engine: "V8",
        type: "Truck"
    }
}
const bus: Bus = {
    123: { // for every field number should be of type Car
        engine: "V7",
        type: "Truck"
    }
}
