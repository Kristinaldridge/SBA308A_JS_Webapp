
document
    .getElementById("submitButton")
    .addEventListener("click", postData);

async function postData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById ("phone").value;
    let message = document.getElementById("message").value;
    let requestBody = { name: name, email: email, phone: phone, message: message };

    //Posted to free fake API location for testing purposes
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
           
        }
    });

    alertResponse(response);
}

async function alertResponse(response) {
    if (response.ok) {
        const responseData = await response.json();
        alert(JSON.stringify(responseData));
    } else {
        alert("The request returned a status other than 200 OK: " + response.status);
    }
}