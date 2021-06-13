const loginForm = document.querySelector('#login-form');
const loginEmail = document.querySelector('#login-email');
const loginPasswd = document.querySelector('#login-passwd');
const loginBtn = document.querySelector('#login-btn');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    sendData = {
        "email": loginEmail.val,
        "password": loginPasswd.val
    };

    fetch('/userAuth/login', {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'home',
        body: JSON.stringify(sendData)
    }).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(JSON.stringify(data.body));
            }
        });
    });
});