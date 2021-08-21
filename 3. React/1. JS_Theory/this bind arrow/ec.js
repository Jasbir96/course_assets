// strict 
// this is defined in  a manner how a function is called

// this function call -> window /undefined
// this method call -> object 

let obj = {
    name: "Steve",
    sayMyName: ()=> {
        console.log(this.name);
    }
}
// function fn() {
//     console.log(window == this);
// }

// fn();

obj.sayMyName();
let ret = obj.sayMyName;
ret();