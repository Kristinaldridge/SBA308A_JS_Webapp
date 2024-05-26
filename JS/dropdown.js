

const api_Key = 'live_AjjJU2oCfHEmb1SAzT7JqmkD7p2t1PEse2HWJRG4hb0gru53rsD1q1rB1aLjxwkE'


async function filterBreed() {
    try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const breeds = await response.json();
        const breedSelect = document.getElementById('breedSelect');
        breeds.forEach(breed => {
        
            const option = document.createElement('option');
            option.text = breed.name;
            option.value = breed.id;
            breedSelect.add(option);
        });
    } catch (error) {
        console.error('Error fetching breeds:', error);

    };
} 

// Async Function to fetch dog breed images 
async function fetchDogImages(breedId) {
    try {
        const response = await fetch(`https://api.thedogapi.com/v1/images/search?breed_id=${breedId}&api_key=${api_Key}`);
        if (!response.ok) {
            throw new Error('Network response error');
        }
        const images = await response.json();
        return images;
    } catch (error) {
        console.error('Error fetching dog images:', error);
        return [];
    }
}

// Function to display dog images
function displayImages(images) {
    const imageGallery = document.getElementById('image-gallery');
    imageGallery.innerHTML = ''; 

     images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = 'Dog Image';
        imageGallery.appendChild(img);
        
        //need to append to button div
    });
}

// Function to filter images
async function findDog() {
    const breedSelect = document.getElementById('breedSelect');
    const selectedBreedId = breedSelect.value;
    const images = await fetchDogImages(selectedBreedId);
   
     
      displayImages(images);
}

// Populate the dropdown
filterBreed();

//event added to finddogbutton
document.getElementById('FindDogBtn').addEventListener('click', findDog);