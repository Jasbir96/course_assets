/////////////////////////////problem//////////////////////////
// class abc{
//     constructor(name)
//     {
//         this.name = name;
//     }
//     sayHi()
//     {
    
//         console.log('Hello');
//         let name= this.name;
//         console.log(name);
//     }
// }
// let obj = new abc('Tushar');
// let btn = document.querySelector('button');
// btn.addEventListener('click',obj.sayHi)

/////////////////////////solution-1////////////////////////
/////////////bind
// class abc{
//     constructor(name)
//     {
//         this.name = name;
//         this.sayHi=this.sayHi.bind(this);
//     }
//     sayHi()
//     {
//         let name= this.name;
//         console.log(name);
//     }
// }
// let obj = new abc('Tushar');
// let btn = document.querySelector('button');
// btn.addEventListener('click',obj.sayHi)
/////////////////////////solution-1////////////////////////
/////////////arrow fn
class abc{
    constructor(name)
    {
        this.name = name;
       
    }
    sayHi=()=>
    {
        let name= this.name;
        console.log(name);
    }
}
let obj = new abc('Tushar');
let btn = document.querySelector('button');
btn.addEventListener('click',function(){
    obj.sayHi();
})