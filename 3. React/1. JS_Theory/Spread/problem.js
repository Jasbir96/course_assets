//integers and strings are passed by their values whereas arrays and objects are passed through reference
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
let copy = state;
//the above line does not create a copy of the state object.
//changes made to copy will be reflected to the state object.
//it is because the copy is also pointing to the same reference as the state.
//this is what mutation is.... making changes to the same object.
copy.name = 'Tony';
console.log(copy);
console.log(state);
