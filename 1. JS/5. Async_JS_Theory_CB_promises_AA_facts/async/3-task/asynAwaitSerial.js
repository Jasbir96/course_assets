let fs = require("fs");
console.log("Before");

// await is an alternative to then 
// await only works inside an async function
//  only async function will wait for await 
// syntax write easier method
async function fn() {
    let frP = fs.promises.readFile("../f1.txt");
    let content = await frP;
    console.log("content->" + content);
    console.log("F2 read sent");
    let f2rp = fs.promises.readFile("../f2.txt");
    content = await f2rp
    console.log("content->" + content);
    let f3rp = fs.promises.readFile("../f3.txt");
    content = await f3rp;
    console.log("content->" + content);
    // start next task
    console.log("All Task completed");
    return "everything is executed";
}
let fnP = fn();
fnP.then(function (rVal) {
    console.log("inside then" + rVal + "");
})

// let sThenPromise = fThenPromise.then(cb2)
//     sThenPromise.then(cb3);

console.log("After");
