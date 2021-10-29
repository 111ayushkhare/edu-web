fetch('/ratingRoutes/fetchAllRatings', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
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