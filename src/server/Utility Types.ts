interface Country {
    region: string
    dateCreated: number;
    population: number;
    birtRate: number
    dominantRace?: string;
}

let SouthAfrica: Required<Country>; // Required means you must pass value to each property
SouthAfrica = {
    region: "Africa",
    dateCreated: 1800,
    population: 50000000,
    birtRate: 2.3,
    dominantRace: "Black"
}

let Philippines: Partial<Country>; // Partial now all properties is optional
Philippines = {
    region: "Asia",
    population: 100000000
}