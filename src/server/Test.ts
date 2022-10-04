interface Account {
    name: string;
    age: number;
}

const account1: Account = {
    name: "Bob",
    age: 30
}

let acc2: Required<Account>