const rateC = document.querySelector('#ratingc1');
const rateCSubmit = document.querySelector('#rate-submit-btn');

rateC.addEventListener('submit', (e) => {
    e.preventDefault();

    const sendRating = {
        "category": "C", 
        "bookLink": document.forms["ratingCForm"]["bookLink"].value, 
        "bookImageLink": document.forms["ratingCForm"]["bookImgLink"].value, 
        "rating": document.forms["ratingCForm"]["ratingValue"].value, 
        "recommendation": 0,
    }

    fetch('/ratingRoute/bookrating', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendRating)
    }).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                alert(data.message);
            } else {
                // window.location.href = '/'
                console.log(data.body);
            }
        });
    }).catch((error) => {
        alert(error);
    });

    fetch('/ratingRoutes/fetchAllRatings', {
        method: 'GET',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
    }).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                alert(data.message);
            } else {
                console.log(data.body);
            }
        });
    }).catch((error) => {
        alert(error);
    });
});