var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  let sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  //   sumOfAllLuckyNumbers  = family.members[0].lucky_numbers.reduce((acc, curr) => acc + curr) +
  //                           family.members[1].lucky_numbers.reduce((acc, curr) => acc + curr) +
  //                           family.members[2].lucky_numbers.reduce((acc, curr) => acc + curr)

  for (const member of family.members) {
    // console.log(member);
    for (const luckyNum of member.lucky_numbers) {
      // console.log(sumOfAllLuckyNumbers, luckyNum);
      sumOfAllLuckyNumbers = sumOfAllLuckyNumbers + luckyNum;
    }
  }
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:
person.lucky_numbers[3] = 33
// console.log(person.lucky_numbers[3])

let person3 = []
family.members.push(
     person3 = {
        name: "Jimmy",
        lastname: "Doe",
        age: 13,
        gender: "male",
        lucky_numbers: [ 1, 2, 3, 4],
        significant_other: null
    }
)
// console.log(family.members[2])

//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 