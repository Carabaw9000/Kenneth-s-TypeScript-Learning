type HairColors = "Black" | "Blonde" | "Red"
let test: keyof HairColors;
test = "gsub"
print(test) 

// The keyof type operator
// The keyof operator takes an object type and produces a string or numeric literal union of its keys. 
// The following type P is the same type as “x” | “y”:
type Point = { x: number; y: number };
type P = keyof Point;

// What keyof does is it exstracts types and places it in union
class WildBoar { name?: string; eyes?: number}
let properties: keyof WildBoar

properties = "name"
properties = "eyes"

print(properties.size())
print(properties.upper())

enum Eagles {
    "Bold" = 1,
    "Flying one",
    "Black mountain"
}

let eagle: keyof Eagles