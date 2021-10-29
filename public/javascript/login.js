const loginForm = document.querySelector('#login-form');
const loginBtn = document.querySelector('#login-btn');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    sendData = {
        "email": document.forms["loginform"]["Mail"].value,
        "password": document.forms["loginform"]["Passwd"].value
    };

    fetch('/userAuth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
    }).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                alert(data.message);
            } else {
                localStorage.setItem('token', data.token);
                window.location.href = '/auth/profile';
            }
        });
    }).catch((err) => {
        console.log(err);
    });
});