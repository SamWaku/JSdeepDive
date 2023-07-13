let formWrapper =  document.getElementById('registerUser');

formWrapper.addEventListener('submit', function (e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;

    const data = {
        name,
        email,
        username
    }

    fetch('http://localhost:4000/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success === true) {
                alert('Success!!! ' + data.message)
            } else {
                alert('Error!!! ' + data.message)
            }
        })
        .catch((error) => {
            alert('Error!!! ' + error);
        });

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
})