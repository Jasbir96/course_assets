const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);


const result = words.filter(function(word){
    return word.length>6;
})
console.log(result);