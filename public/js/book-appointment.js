const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const userAvailabilityId = urlParams.get("id");

let formWrapper = document.getElementById("makeBooking");

formWrapper.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    const bookingData = {
        name,
        email,
        message,
    };

    fetch(`http://localhost:4000/api/appointment/${userAvailabilityId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
    })
        .then((response) => response.json())
        .then((bookingData) => {
            if (bookingData.success === true) {
                alert("Success!!! " + bookingData.message);
            } else {
                alert("Error!!! " + bookingData.message);
            }
        })
        .catch((error) => {
            alert("Error!!! " + error);
        });

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';
});
