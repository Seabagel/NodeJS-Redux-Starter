// Immutable, When newName is created, we get a new string
// The original name string is not affected
let name = "Mosh";
let newName = name.toUpperCase();

// In Javascript, objects and arrays are NOT! immutable
// We can add parameters and modify values in runtime
let book = {};
book.title = "...";
// const book
// Assigning it as a Constant Variable prevents immutability

// To change a value of an immutable variable,
// We should take a copy first, and then update the copy
// There's 2 ways to do this in Javascript
const person = { name: "John" };
// Method 1
const updated = Object.assign({}, person, { name: "Bob", age: 30 });
// Method 2, Spread Operator
// NOTE: This only does a shallow copy of the original variable
const spread = { ...person, name: "Bob", age: 30 };

console.log(spread);

// Method 3
// Deep copy
const person2 = {
    name: "John",
    address: {
        country: "USA",
        city: "San Francisco",
    },
};
const updated2 = {
    ...person,
    address: {
        // Do spread copy for each property
        ...person2.address,
        city: "New York",
    },
    name: "Bob",
    age: 30,
};
console.log(updated2);
