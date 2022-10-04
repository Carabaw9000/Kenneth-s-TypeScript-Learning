// Import
// require a modules script example
// import a module for side effect in TypeScript
import "server/Import & Export/ZipCodeValidator"

// import types
// import type { ValidGreetings } from "server/Import & Export/ZipCodeValidator"

// Explicitly pull out a value (getResponse) and a type (APIResponseType) 
// import { Test, type ValidGreetings} from "server/Import & Export/ZipCodeValidator";
import {mainValidator } from "server/Import & Export/Exports";

let validatorTest: mainValidator = new mainValidator()
validatorTest.isAcceptable("The string");

// let Hey: ValidGreetings = 'Hey'  
// let newTest: Test = new Test("whattt");

// Import the entire module into a single variable, and use it to access the module exports
import * as validator from "./ZipCodeValidator";
let myValidator = new validator.ZipCodeValidator();
let anotherTest: validator.Test = new validator.Test("a string")
let aGreeting: validator.ValidGreetings = "Hola"