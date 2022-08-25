// fetch request
// json placeholder api

// fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
//     console.log('resolved', response);
//     return response.json()
// }).then((data) => {
//     // fetch data from api response
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);
// })



// using async && await
// const getTodos = async () => {

//     const response = await fetch('https://jsonplaceholder.typicode.com/todo')
//     // console.log(response)
//     const data = await response.json();
//     console.log(data);


// }



// getTodos();






//async await using local api
const getTodos = async () => {

    const response = await fetch('db.json')
    // console.log(response)
    const data = await response.json();
    // console.log(data);
    return data;


}



getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected', err));






// local json api
// fetch('db.json').then((response) => {
//     console.log('resolved', response);
//     return response.json()
// }).then((data) => {
//     // fetch data from api response
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);
// })


















