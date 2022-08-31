// // asynchronous & callbacks
// const posts = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//         },
//         {
//         "userId": 1,
//         "id": 2,
//         "title": "qui est esse",
//         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//         },
//         {
//         "userId": 1,
//         "id": 3,
//         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//         }
// ]

// // output to the console after 2sec
// function getPosts () {
//     setTimeout(() => {
//         posts.forEach((item) => {
//             console.log(posts)
//         });
//     }, 2000);
// }

// getPosts()


// // output to the browser after 2sec
// function getPosts () {
//     setTimeout(() => {
//         let output = "";

//         posts.forEach((post, index) => {
//             output += `<li>${post.title} : ${post.body}</li>`
//         });
//         document.body.innerHTML = output;

//     }, 3000);
// }



// document.addEventListener('DOMContentLoaded', () => {
//     getPosts()


// })


// // create new post
// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post)

//     }, 1000);
    

// }


// createPost({title: "Post three", body: "This is my post three"})


// // using async await method















