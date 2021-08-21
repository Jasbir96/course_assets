let arr = [1,2,3,4,5,6]
//2 ways
// let narr = arr.map(function(el,index){
//     console.log(el+"  "+index);
//     return el*2;
// })
// console.log(narr);

let narr = arr.map((el,index)=>el*2);
console.log(narr);
