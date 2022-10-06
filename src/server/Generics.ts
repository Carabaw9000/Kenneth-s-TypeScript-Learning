// Generics

// A major part of software engineering is building components that not only have well-defined and consistent APIs, 
// but are also reusable. Components that are capable of working on the data of today as well as
//  the data of tomorrow will give you the most flexible capabilities for building up large software systems.

// In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics,
//  that is, being able to create a component that can work over a variety of types rather than a single one.
//   This allows users to consume these components and use their own types.

// Hello World of Generics
// To start off, let’s do the “hello world” of generics: the identity function. The identity function is a function that will return back whatever is passed in.
// You can think of this in a similar way to the echo command.
// Without generics, we would either have to give the identity function a specific type:
function identity(arg: number): number {
    return arg;
  }
  // Or, we could describe the identity function using the any type:
  function identityGenericAny(arg: any): any {
    return arg;
  }
  //  While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg,
  //  we actually are losing the information about what that type was when the function returns. If we passed in a number,
  //  the only infomation we have is that any type could be returned.
  // Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned.
  //  Here, we will use a type variable, a special kind of variable that works on types rather than values.
  function identityGeneric<Type>(arg: Type): Type { // Generic function Type Because whichevr type you pass to function
    return arg;
  }
  
  // Once we’ve written the generic identity function, we can call it in one of two ways. The first way is to pass all of the arguments,
  //  including the type argument, to the function:
  let output = identityGeneric<string>("myString");
  
  // Here we explicitly set Type to be string as one of the arguments to the function call, denoted using the <> around the arguments rather than ().
  // The second way is also perhaps the most common. Here we use type argument inference — that is,
  //  we want the compiler to set the value of Type for us automatically based on the type of the argument we pass in:
  let output2 = identityGeneric("myString");
  
  
  
  // Generic Array no different between 2 arrays they are equivalent
  let alphabet: Array<string> = ['a','b','c']
  let alphabet2: string[] = [];
  // let modifier: readonly Array<string>; // Error!
  let modifier: readonly string[]; // works , readonly can only be used for syntax on array types and tuple types
  let modifier2: ReadonlyArray<string>; // equivalent to the above
  
 function castToType<T>(object: any){
    return object as T
 } 
 
 let theResult = castToType<string>(23) // output would be of type string