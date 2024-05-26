
// Select the HTML element where you want to display the dog image
const dogImage = document.getElementById('random-dog');
const apiKey = 'live_AjjJU2oCfHEmb1SAzT7JqmkD7p2t1PEse2HWJRG4hb0gru53rsD1q1rB1aLjxwkE'

// Function to fetch a random dog image
function fetchRandomDogImage() {
    fetch('https://api.thedogapi.com/v1/images/a4dzJ1h49', {
        headers: {
            'x-api-key': apiKey
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');
            }
            return response.json();
        })
        .then(data => {
           
            if (data.url) {
                dogImage.src = data.url;
            } else {
                throw new Error('API Issue');
            }
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
            // Display a default image or show an error message
            // For now, let's set a placeholder image
            dogImage.src = 'https://cdn2.thedogapi.com/images/mufxR-Px7.jpg';
        });
}

fetchRandomDogImage();

//Select second random dog image
const dogImageTwo = document.getElementById ('random-dog-two')


// Function to fetch a random dog image two
function fetchRandomDogImageTwo() {
    fetch('https://api.thedogapi.com/v1/images/r1ZfomsN7', {
        headers: {
            'x-api-key': apiKey
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');
            }
            return response.json();
        })
        .then(data => {
           
            if (data.url) {
                dogImageTwo.src = data.url;
            } else {
                throw new Error('API Issue');
            }
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
            // Display a default image or show an error message
            // For now, let's set a placeholder image
            dogImageTwo.src = 'https://cdn2.thedogapi.com/images/mufxR-Px7.jpg';
        });
}

fetchRandomDogImageTwo();