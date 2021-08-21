const state = {
    name: 'John',
    address: {
        city: 'London',
        country: {
            countryName: 'United Kingdom',
            countryCode: 'UK',
        },
    },
};
// let copy = {...state};
// copy.address.city='Delhi'
//this is known as shallow copy
// Shallow in this context means that for any given object that is spread, the uppermost level of the new variable
//  is an object containing the same properties and values of the original object, but at a new reference in memory.
//  Any lower level or nested objects, however, will remain pointing to their original references
// console.log(copy);
// console.log(state);
//let's now do deep copy
const deeperCopyState = {
    ...state,
    //do double or triple nesting in accordance to your comfort
    address: {
        ...state.address,
    country: {
            ...state.address.country
        }
    },
};
deeperCopyState.address.country.countryName='India';
console.log(deeperCopyState);
console.log(state);
// copy 
// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };
// //  copied person reference -> preson ke andar ke object ka 
// 1. address are copied ;
// let copiedPerson = person;
// console.log(copiedPerson);
// person.firstName="Steve";
// console.log(copiedPerson);

// copy -> fast 
// shallow copy 
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};
// in case of shallow copy only high level keys are copied but 
// the internal objects are not copied instead there address is copied 
// spread operator  
// let topLevelObject = { ...person };
// person.address.street="12";
// person.lastName = "Rogers";
// topLevelObject.firstName = "Steve"
// console.log("person", person);
// console.log("top level ", topLevelObject);



//  most costliest operation is JSON.parse and stringify 
// Deep copy
// console.log(JSON.stringify(person));
let topLevelObject = JSON.parse(JSON.stringify(person));
person.address.street = "12";
person.lastName = "Rogers";
topLevelObject.firstName = "Steve";
console.log("person", person);
console.log("top level ", topLevelObject);