// Mapped Types

// When you don’t want to repeat yourself, sometimes a type needs to be based on another type.

// Mapped types build on the syntax for index signatures, 
// which are used to declare the types of properties which have not been declared ahead of time:

class Horse {
    name: string;
    age?: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age; 
    }
}

type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};
 
const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
  bark: {
    name: "Barky",
    age: 30,
  }
};

// A mapped type is a generic type which uses a union of PropertyKeys
//  (frequently created via a keyof) to iterate through keys to create a type:

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

// In this example, OptionsFlags will take all the properties from the type Type and change their values to be a boolean.

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
// Changed to -->
// type FeatureOptions = {
//   darkMode: boolean;
//   newUserProfile: boolean;
// }
// <--

type woot = {
  what(): void;
  itworks(): boolean
  hmm: () => void
}
 