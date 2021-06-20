fetch('/userAuth/profile', {
    method: 'GET',
    headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
    },
}).then((response) => {
    response.json()
        .then((data) => {
            if (data.error) {
                throw new Error(data.error);
            }

            document.querySelector("#profile-name").textContent = data.name;
            document.querySelector("#profile-email").textContent = data.email;
            document.querySelector('#logout-btn').textContent = "Logout";
            document.querySelector('#logout-all-btn').textContent = "Logout All devices";
        });
}).catch((err) => {
    console.log(err);
});
