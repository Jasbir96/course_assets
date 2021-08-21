// Normally, a Javascript array's contents are modified using mutative functions like push, unshift, and splice.
//  Since we don't want to mutate state directly in react, those should normally be avoided. Because of that, 
// you might see "insert" or "remove" behavior written like this:
let arr =[0,1,2,3,4,5,6];
let index = 3;
//now let's say we need to add some element at index immutably
// let copy = [arr.slice(0,index),10,arr.slice(index)];//this is the wrong way
let copy = [...arr.slice(0,index),10,...arr.slice(index)];
console.log(arr);
console.log(copy);
