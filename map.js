var people = ['Bob', 'Jen', 'James', 'Isolde'];

// Your code here!

// Write some code using map that takes the above array of objects, and turns the array elements to all caps

var peoplemap = people.map(function(p){
  return p.toUpperCase();
})
console.log(peoplemap);
// ex:
// console.log(people);
// > [ 'BOB', 'JEN', 'JAMES', 'ISOLDE' ]
