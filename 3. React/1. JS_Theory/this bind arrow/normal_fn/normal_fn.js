function bike() {
  'use strict';//In strict mode this of function is set to undefined.
    console.log(this.name);
  }
  
  // var name = "Ninja"; //use with browser

  var obj1 = { name: "Pulsar", bike: bike };
  var obj2 = { name: "Gixxer", bike: bike };
  
  obj1.bike();      // "Pulsar"
  obj2.bike();      // "Gixxer"
  bike();           // "Ninja"