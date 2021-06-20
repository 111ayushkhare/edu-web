const logoutForm = document.querySelector('form');

const logoutBtn = document.querySelector('#logout-btn');
const logoutAllBtn = document.querySelector('#logout-all-btn');

logoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('/userAuth/logout', {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }).then((response) => {
        console.log(response);
        window.location.href = '';
    }).catch((err) => {
        console.log(err);
    });
});

logoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('/userAuth/logoutAll', {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }).then((response) => {
        console.log(response);
        window.location.href = '';
    }).catch((err) => {
        console.log(err);
    });
});