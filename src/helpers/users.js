export function createUser(user) {
    fetch('http://localhost:3000/users/newUser',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(user)
    })
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(body => {
        console.log(body);
        localStorage.setItem('user', JSON.stringify(body));
        localStorage.cartItems = []
    })
    .catch(err => console.log(err))
}

export function updateUser(user) {
    console.log(user);
    fetch('http://localhost:3000/users/updateUser/' + String(user["_id"]), {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
    }
    })
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(body => {
        localStorage.setItem('user', JSON.stringify(body));
        localStorage.cartItems = []
    })
    .catch(err => console.log(err))
}