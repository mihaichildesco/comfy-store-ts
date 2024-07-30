const people = [
  {
    name: "John",
    age: 25,
    occupation: "Developer",
  },
  {
    name: "Jane",
    age: 30,
    occupation: "Designer",
  },
  {
    name: "Bob",
    age: 40,
    occupation: "Manager",
  },
];

const person = Object.fromEntries(people);

console.log(person);
