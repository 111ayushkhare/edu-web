let username = document.getElementById("name");
let email = document.getElementById("name");
let passwd = document.getElementById("name");

//document.getElementById('signup').onclick = funfoo(); ///.addEventListener("click", funfoo);

let x = document.getElementById('signupform');

let reqObj = {
    "name": username,
    "email": email,
    "password": passwd
};

x.addEventListener("submit", fetch('http://localhost:3000/user/signup', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqObj)
})
.then(response => response.json({
    "response": response
}))
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
}));


