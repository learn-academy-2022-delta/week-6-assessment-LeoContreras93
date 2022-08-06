// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("sentence", () => {
  it("returns array sentence with name capitalized", () => {
    expect(sentence(people)).toEqual(["Ford Perfect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]);
  })
})


// b) Create the function that makes the test pass.

//declare function
//takes in an array as parameter
//iterate over the array using .map
//concat
//string interpolation

const sentence = (personArray) => {
  return personArray.map(value => {
   let name = value.name.split(" ")
   let firstLetter = name[0].slice(0, 1).toUpperCase()
   let firstName = name[0].slice(1)
   let lastLetter = name[1].slice(0, 1).toUpperCase()
   let lastName = name[1].slice(1)
   let occupation = value.occupation
   return `${firstLetter}${firstName} ${lastLetter}${lastName} is ${occupation}.`
  })
}




//what exaclty is .map mapping over in the array?

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.

describe("mixedData", () => {
      it("returns only the remainder of the numbers array when divided by 3.", () => {
        expect(mixedData(hodgepodge1)).toEqual([2, 0, -1, 0]);
        expect(mixedData(hodgepodge2)).toEqual([2, 1, -1]);
      })
    })

//declared a function
//takes in an array as a parameter
// iterate over the array using .filter to remove anything that is not a number in the array
// iterate over new array using .map 
// use modulo to find the remainders of the numbers divided by 3

// const mixedData = (array) => {
//   return array.filter(element => {
//     return typeof element === 'number'
//   }).map(number => number % 3)
// }

const mixedData = (array) => {
  let Arr = array.filter(element => {
        return typeof element === 'number'
      })
      return array.map(number => {
       return number % 3
      })
    }

    // line 54 why do we need to put number in quotes? 


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("areYouCubed", () => {
    it("returns the sum of all the numbers cubed", () => {
      expect(areYouCubed(cubeAndSum1)).toEqual(99);
      expect(areYouCubed(cubeAndSum2)).toEqual(1125);
    })
  })

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass.


// declare a function
// one paramaterer which is an array
//iterate over the array using .map
// **3


const areYouCubed = (array) => {
  let cubed = array.map(num => {
    return num **3
  })
  return eval(cubed.join("+"))
}
