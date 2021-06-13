const signupForm = document.querySelector('#signup-form');
const signupName = document.querySelector('#signup-name');
const signupEmail = document.querySelector('#signup-email');
const signupPasswd = document.querySelector('#signup-passwd');
const signupBtn = document.querySelector('#signup-btn');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    sendData = {
        "name": signupName.val,
        "email": signupEmail.val,
        "password": signupPasswd.val
    };

    console.log(sendData.name);
    console.log(sendData.email);
    console.log(sendData.password);

    fetch('/userAuth/signup', {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'home',
        body: JSON.stringify(sendData)
    }).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log("are yaar");
                console.log(data.error);
            } else {
                console.log(JSON.stringify(data.body));
            }
        });
    }).catch((err) => {
        console.log("are yaar 2");
        console.log(err);
    });
});