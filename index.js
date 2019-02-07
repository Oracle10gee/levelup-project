

// ARRAY 1
const texasss = [
    {
      name: 'Mike',
      age: 23,
      gender: 'm',
      us: false,
    },
    {
      name: 'Liz',
      age: 20,
      gender: 'f',
      us: true,
    },
    {
      name: 'Chris',
      age: 102,
      gender: 'm',
      us: true,
    },
    {
      name: 'Chuloo',
      age: 27,
      gender: 'm',
      us: false,
    },
    {
      name: 'Annie',
      age: 30,
      gender: 'f',
      us: true,
    },
  ]


  // Filter every element of this array 1
var femalecoders = texasss.filter(function(person) {
// only return the objects that have the key gender === f
return person.gender === 'f';
});
console.table(femalecoders);
//list of female coders

let age = texasss.reduce((starter, person) => {

}, 0);

let sumofage = texasss.reduce((starter, person) => {
    
    return starter + person.age;
}, 0);
console.log(sumofage)
//sum of total ages in the array




// ARRAY 2
const newieyork = [
    {
      name: 'Michelle',
      age: 19,
      coder:true,
      gender: 'f',
      us: true,
    },
    {
      name: 'Sam',
      age: 25,
      coder:false,
      gender: 'm',
      us: false,
    },
    {
      name: 'Ivy',
      age: 26,
      coder:true,
      gender: 'f',
      us: false,
    },
    {
      name: 'Nick',
      age: 32,
      coder:true,
      gender: 'm',
      us: true,
    },
    {
      name: 'Jim Beglin',
      age: 65,
      coder:false,
      gender: 'm',
      us: true,
    },
  ]

  var sortedarray = newieyork.sort(function(a,b) {
      if (a.name > b.name) {
          return 1;
      } else {
          return -1;
      }
  });
console.table(sortedarray);
//returns users in ascending odrer

var femalecoders = newieyork.filter(function(person) {
    // only return the objects that have the key gender === f
    return person.gender === 'f';
    });
    console.table(femalecoders);
    //list of female coders

var sortedarraybyage = newieyork.sort(function(a,b) {
      if (a.age > b.age) {
          return 1;
      } else {
          return -1;
      }
  });    
  console.table(sortedarraybyage);
  //sort users by age


