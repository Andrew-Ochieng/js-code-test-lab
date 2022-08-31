// api endpoint
const userUrl = 'https://reqres.in/api/users'


// fetch requests

fetch(userUrl)
    .then((res) => {
        if (res.ok) {
            console.log("Your fetch request was successful");
        } else {
            console.log("Your fetch request failed");
        }
        return res.json();
    })
    .then((users) => handleData(users))
    .catch((err) => console.log(err))


    function handleData(users) {
        const userList = users.data;
        return [...userList].map((user) => createUser(user))
    }


    function createUser(user) {
        let userEl = document.getElementById("users")

        userEl.innerHTML += `
            <div>
                <img src="${user.avatar}"/>
                <h3>${user.first_name}</h3>
                <p>${user.email}</p>
            </div>
        `
        
    }


// render DOM onload
document.addEventListener("DOMContentLoaded", () => {
    handleData()
    createUser()

    
})



