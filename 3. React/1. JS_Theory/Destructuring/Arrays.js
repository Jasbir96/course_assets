// indexing
let arr = ["Jasbir", "Singh", "24", "Indian"];
let name = arr[0];
let lastName = arr[1];
let introduction = ["Hello", "I" , "am", "Tushar"];
let [greeting, pronoun] = introduction;
console.log(greeting);//"Hello"
console.log(pronoun);//"I

//////////////////Skipping items///////////////////////////

let [greeting,,,name] = ["Hello", "I" , "am", "Tushar"];

// console.log(greeting);//"Hello"
// console.log(name);//"Tushar"
//////////////////////////Using default values//////////////
let [greeting = "hi",name = "Tushar"] = ["hello"];
console.log(greeting);//"Hello"
console.log(name);//"Tushar"



////////////////Assigning rest of the array//////////////
let arr = ["Hello", "I" , "am", "Sarah"];
let greeting = [arr,...intro];
console.log(greeting);//"Hello"
console.log(intro);//["I", "am", "Sarah"]
intro[0]='Bye';
console.log(arr);
console.log(intro);







////////////Swapping values////////////////////

// let a = 3;
// let b = 6;

// [a,b] = [b,a];

// console.log(a);//6
// console.log(b);//3
