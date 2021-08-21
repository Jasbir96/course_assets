///////////////////basic way////////////////
// let person = {name: "Steve", country: "Los Angeles", job: "Avenger"};
// let name = person.name;
// let country = person.country;
// let job = person.job;
// console.log(name);//"Steve"
// console.log(country);//"Los Angeles"
// console.log(job);//Avenger
///////////////////Destructuring way////////////////
// let person = {name: "Steve", country: "Los Angeles", job: "Avenger"};
// let {name, country, job} = person;
// console.log(name);//"Steve"
// console.log(country);//"Los Angeles"
// console.log(job);//Avenger
//////////////////////Undefined///////////////////
// let person = {name: "Steve", country: "Los Angeles", job: "Avenger"};
// let {name, obj, job} = person;

// console.log(name);//"Steve";
// console.log(obj);//"undefined";
// console.log(job);//Avenger;
// let { name, country, abc = "hello" } = person;
////////////////////Using a new variable name////////////////

let person = {name: "Steve", country: "Los Angeles", job: "Avenger"};
let {name:a, country:b, job:c} = person;
console.log(a);//"Steve"
console.log(b);//"Los Angeles"
console.log(c);//Avenger