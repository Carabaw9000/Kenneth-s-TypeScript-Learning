// https://www.tutorialsteacher.com/typescript/type-inference

// Type Inference (Infer Types)
// example a variable is inferred when there is no explicit information available of the type 
let myVariable;  // becomes any
let aString = "Hey" // we didn't explicity defined let aString: sttring = "Hey" so typescript infers the type based on the value.
let test = undefined
let arr = [3, 5 ,undefined, 30] // number type was inferred

let unionArr = [5, 7 , "Test"] // string and number inferred we also call this a union type
unionArr.push("New string") // this works because string is one of the types
// unionArr.push(true) // Error boolean not part of union type

//Example of implicit and explicit inferred type
let myString: string // Explicit we declared the variable with type
let anotherVar       // Implicit we didn't declare the type

let arrr: (string | number)[] = [123, 53, "string"]