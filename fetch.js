// // fetch request
// // json placeholder api
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos'


// function getTodos(id) {
//     fetch(`${apiUrl}/${id}`).then((response) => response.json())
//         .then((data) => {
//             document.getElementById("post").innerHTML += data
//             .map((todo) => {
//                 `<li>${todo.title}</li>`
//             }).join("")
    
//         })
//         // .catch((err) => {
//         //     console.log('rejected', err);
//         // })
// }


// document.addEventListener('DOMContentLoaded', () => {
//     getTodos(1)


// })



// // using async && await
// // const getTodos = async () => {

// //     const response = await fetch('https://jsonplaceholder.typicode.com/todo')
// //     // console.log(response)
// //     // const data = await response.json();
// //     console.log(response);


// // }


// // getTodos();






// //async await using local api
// // const getTodos = async () => {

// //     const response = await fetch('db.json')
// //     // console.log(response)
// //     const data = await response.json();
// //     // console.log(data);
// //     return data;


// // }



// // getTodos()
// //     .then(data => console.log('resolved:', data))
// //     .catch(err => console.log('rejected', err));






// // local json api
// // fetch('db.json').then((response) => {
// //     console.log('resolved', response);
// //     return response.json()
// // }).then((data) => {
// //     // fetch data from api response
// //     console.log(data);
// // }).catch((err) => {
// //     console.log('rejected', err);
// // })




// // map examp













