////////////////problem////////////////////
var name = 'Alien';
function fn()
{
    //here the this is determined at runtime 
    console.log(`Hi my name is ${this.name}`);
    function abc()
    {
        // 'use strict'// with use-strict we will get error, without it we will get undefined
        console.log(`Hi my name is ${this.name}`);
    }
    abc();
}
let obj = {
name:"Tushar",
func:fn
}
obj.func();




////////////////solution-1////////////////////
//use bind
// function fn()
// {
//     //here the this is determined at runtime 
//     console.log(`Hi my name is ${this.name}`);
//     function abc()
//     {
//         console.log(`Hi my name is ${this.name}`);
//     }
//    let ffn =  abc.bind(this);
//    ffn();
// }
// let obj = {
// name:"Tushar",
// func:fn
// }
// obj.func();



// move use-strict here


////////////////solution-2////////////////////
//use arrow functions
// function fn()
// {
//     //here the this is determined at runtime 
//     console.log(`Hi my name is ${this.name}`);
//      let abc=()=>
//     {
//         console.log(`Hi my name is ${this.name}`);
//     }
//     abc();
  
// }
// let obj = {
// name:"Tushar",
// func:fn
// }
// obj.func();
