// 
// object example
// 
// let person = {
//   name: 'Michal G McDougal',
//   age: 28,
//   loaction: {
//     street: '217 Fort Street',
//     temp: 90
//   }
// }

// let {name, age} = person;
// let {street = "NY", temp: temperature = 85} = person.loaction

// console.log(`${name} and age is ${age}`)

// if (street && temperature) {
//   console.log(`${street} and age is ${temperature}`)
// }

// 
// array example
// 
// let address = ['217 Fort Street', 'Rocky Mount', 'NC', 'North Carolina', '27801'];

// value empty
let address = [];
// let [street, city, state, stateFull, zip] = address;

// skiping first 3 array items
// let [, , , stateFull, zip] = address;

// show default value
let [, , , , zip = 1250] = address;

console.log(`Address is ${zip}`)