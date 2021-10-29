const signupForm = document.querySelector('#signup-form');
const signupBtn = document.querySelector('#signup-btn');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const sendData = {
        "name": document.forms["signupform"]["Name"].value,
        "email": document.forms["signupform"]["Mail"].value,
        "password": document.forms["signupform"]["Passwd"].value
    };

    fetch('/userAuth/signup', {
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
                window.location.href = '/auth/login'
            }
        });
    }).catch((error) => {
        alert(error);
    });
});