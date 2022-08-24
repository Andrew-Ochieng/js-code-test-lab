// // loops

// // for loops
// let students = ['Jason', 'Sharlene', 'Brian', 'Mary', 'Oruru', 'Maina', 'Asman', 'Joy', 'Andrew']
// let languages = ['Javascript', 'Python', 'Ruby', 'Java', 'C++', 'C#', 'Rust']
// let school = {
//   name: 'University of Eastern Africa, Baraton', 
//   viceChancellor: 'Prof. Phillip Maiyo',
//   location: 'Nandi, Kenya',
//   lecturers: 120,
//   courses: ['Nursing', 'Engineering', 'Education', 'Agriculture', 'Business', 'Information Technology']
// }


// // for...loop
// function itsStudents(students) {
//   //statement                                                   
//   for (let i = 0; i < students.length; i++) {
//     // console.log(i)
//     console.log(students[i])
    
//   }
// }

// itsStudents(students)



// // for...of
// function programmingLanguages(languages) {
//   for (let language of languages) {
//     console.log(language)
//   }

// }

// programmingLanguages(languages)


// // for...in loop
// function schoolDetails(school) {
//   for (let key in school) {
//     // console.log(typeof key)
//     console.log(school[key])
//   }
// }

// schoolDetails(school)


// // array update
// const mondayMenu = {
//   cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" },
//   fries: "Curly",
//   salad: "Cobb",
// };
// mondayMenu.fries = "Sweet potato";


// DOM manupilation
// document.querySelector("h1").textContent;

// const name = document.querySelector('#firstHeading')

// name.style.color = 'red'


// const username = document.getElementsByClassName



// array methods
// filter() method
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// const choose = drivers.filter((value, index, arr) => {
//     return arr.indexOf(value) === index;
// }) 


// console.log(choose)

// function isChoice(drivers) {
//     return drivers === 'Bobby'
// }

// console.log(choose)

// example2
// const numbers = [1, 2, 3, 4, 6, 5, 9]
// const persons = [
//     {
//         name: 'Paul', 
//         age: 24
//     },
//     {
//         name: 'Brian', 
//         age: 17
//     },
//     {
//         name: 'Jenny', 
//         age: 28
//     },
//     {
//         name: 'Nicky', 
//         age: 16
//     }

// ]

// const number = [1, 2, 3, 5, 2, 6, 7, 9, 1, 8, 3]

// const even = numbers.filter(isEven)
// const odd = numbers.filter(isOdd)
// const adults = persons.filter(isAdult)

// const nums = persons.filter((value, index, arr) => {
//     return arr.indexOf(value) === index;
// })

// console.log(nums)

// function isEven(value) {
//     return value % 2 === 0;
// }

// function isOdd(value) {
//     return value % 3 === 0;
// }

// function isAdult(person) {
//     return person.age > 18
// }


// console.log(even)
// console.log(odd)
// console.log(adults)



// forEach()
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }


// console.log(numbers)


// const artists = ["Janelle Monae", "Sza", "Thunder Cat", "Frank Ocean"];

// const numberedArtists = artists.map(function (artist, index) {
//   return `${index + 1}. ${artist}`;
// });
// console.log(numberedArtists);





