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
    .then((data) => {
        console.log(data)

        getUsers()

    })
    .catch((err) => console.log(err))


    function getUsers(data) {
        let userEl = document.getElementById("users")
        data.forEach(user => {
            userEl.innerHTML += `
            <div>
                <h3>${user.first_name}</h3>
                <p>${user.email}</p>
            </div>
        `
        });
        
    }


// render DOM onload
document.addEventListener("DOMContentLoaded", () => {
    getUsers()

    
})



