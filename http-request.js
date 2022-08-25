// // get data from server to browser
// // fetch("http://localhost:3000/posts")
// //     .then((response) => response.json())
// //     .then((data) => {
// //         let posts = document.getElementById("posts")
        
// //     })




// // XML http request
// const getTodos = (resource) => {

//     return new Promise ((resolve, reject) => {
//         const request = new XMLHttpRequest()

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 // console.log(request, request.responseText);
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);

//             } else if (request.readyState === 4) {
//                 // console.log('could not get the data');
//                 reject(data);

//             } 

//             request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//             request.send();

//         })

//     })
    
// }


// getTodos('db.json').then(data => {
//     console.log('promise resolved:', data);
// }).catch(err => {
//     console.log('promise rejected:', err);
// })


// // chaining promises - you can use as many .then callbacks as you can but must only have one .catch method






// // console.log(1)
// // console.log(2)

// // getTodos((err, data) => {
// //     console.log('callback fired!');
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log(data)
// //     }
// // });




// // console.log(3);
// // console.log(4)


// // post data to browser
















