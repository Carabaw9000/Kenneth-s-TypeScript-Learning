//https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// Primitive types
// string, number and boolean
let word: string = "Hey"
let size: number = 3
let hasCapital: boolean = true

// String, Number and Boolean are special built-in types that will very rarely appear in your code. 
let test: String = "an Sentence"
// let testSize: number = test.size() //Error

//Array 
let someWords: string[] = ["hey",'hello'] // is same as below
let moreWords: Array<string> = ["Hola","Bonjour"]

// Tuple Types
// A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
let aTuple: [string, string, number] = ["hey", "hello", 123]
type StringNumberPair = [string, number]; 
// Here, StringNumberPair is a tuple type of string and number. Like ReadonlyArray, it has no representation at runtime, but is significant to TypeScript.
//  To the type system, StringNumberPair describes arrays whose 0 index contains a string and whose 1 index contains a number.
function doSomething(pair: [string, number]) {
  const a = pair[0]; // const a: string
  const b = pair[1]; // const b: number
}
doSomething(["hello", 42]);
// If we try to index past the number of elements, we’ll get an error.
function doSomething1(pair: [string, number]) {
//   const c = pair[2]; // Tuple type '[string, number]' of length '2' has no element at index '2'.
}
// We can also destructure tuples using JavaScript’s array destructuring.
function doSomething2(stringHash: [string, number]) {
  const [inputString, hash] = stringHash;
  print(inputString);// const inputString: string
  print(hash); // const hash: number
}

// any
// TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
// When a value is of type any, you can access any properties of it (which will in turn be of type any), 
// call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
obj.foo();
// obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
//The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.

// noImplicitAny
// When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.
// You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.

// Type Annotations on Variables
// When you declare a variable using const, var, or let, you can optionally add a type annotation to explicitly specify the type of the variable:
// var not supporte in rbxtsc
let myName: string = "Alice";
// left side type is not supported e.g string myName = "Alice"
// Type annotations will always go after the thing being typed.Type annotation will a

// Functions
// Functions are the primary means of passing data around in JavaScript. TypeScript allows you to specify the types of both the input and output values of functions.
// Parameter Type Annotations

// When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. 
// Parameter type annotations go after the parameter name:
// Parameter type annotation
function greet(name: string) {
  print("Hello, " + name.upper() + "!!");
}
// When a parameter has a type annotation, arguments to that function will be checked:
// Would be a runtime error if executed!
// greet(42); // Error
// Argument of type 'number' is not assignable to parameter of type 'string'.