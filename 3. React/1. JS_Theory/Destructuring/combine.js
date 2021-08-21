let person = {name: "Steve", country: "LA", 
friends: ["Falcon", "Bucky"]};
let {name:foo, friends: bar} = person;
console.log(foo);
console.log(bar);