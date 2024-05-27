### Name
SBA308A_JavaScript_Webapp

### Description
- This web page showcases the an app landing page interface of PawSure, a simulated dog insurance application tailored for pet owners who prioritize their furry companions' safety during travel. Please note that PawSure is a fictional concept, and no active application exists under this name. As a result, the provided links intentionally do not redirect users to an active app.
- This code is designed to create a simple web page that allows users to dynamically search their specific breed of dog and submit a message form. It includes functionality to ensure a visual image breed type populates per user search and successful POST of Form. 


### Usage

1. Clone the repository or download the files.
2. Open the HTML file containing the code in a web browser.
3. Interact: Use the navigation links to explore different sections of the application, including features, download options, and feedback submission.

   
### Features
1. Form Submission: The application allows users to submit their feedback through a form, including their name, email, phone number, and message.
2. Data Posting: Upon clicking the submit button, the application posts the form data to a free fake API endpoint (https://jsonplaceholder.typicode.com/todos) for testing purposes, however the form also has functional capabilites to retrive messages via API Token until 6/6/2024. 
3. Dynamic Breed Selection: The application dynamically populates a dropdown menu with dog breeds fetched from the Dog API, allowing users to select their desired breed.
4. mage Retrieval: Upon selecting a breed, the application fetches and displays images of dogs belonging to the selected breed from the Dog API.
5. Customizable API Key: The application utilizes a customizable API key for authentication with the Dog API, ensuring secure data retrieval.
6. Response Handling: Comprehensive error handling is implemented to manage the response from the API, providing feedback to the user based on the success or failure of the request.
   


### Files
1. index.html: The main HTML file containing the structure and content of the PawSure landing page.

2. webapp.css: The CSS file responsible for styling the PawSure landing page, including layout, colors, typography, and responsiveness.

3. webapp.js: The JavaScript file implementing dynamic functionality on the PawSure landing page, such as fetching dog breed data and displaying images.

4. getImage.js: The JavaScript file handling the retrieval and display of dog images based on selected breeds.

5. dropdown.js: The JavaScript file managing the functionality of the breed selection dropdown menu.

6. formapp.js: The JavaScript file enabling form submission functionality, including posting user feedback to a simulated API endpoint and handling responses.

7. Images folder: Contains various image assets used in the PawSure landing page, including app badges, device mockups, and testimonials.

### Feedback
We welcome any feedback or suggestions you may have regarding PawSure. Please use the feedback modal within the application.

### Contributing
Contributions to PawSure are welcome! If you'd like to contribute to the project, please follow these steps:

1.Fork the repository.
2.Create a new branch (git checkout -b feature/my-feature).
3.Make your changes and commit them (git commit -am 'Add new feature').
4.Push to the branch (git push origin feature/my-feature).
5.Create a new Pull Request.

  
### Contributors
Kristin Aldridge

Startbootstrap-->used as template

## Project Status
  - completed. In the event an actual app is created, the proper link to the app will be added. Additional Featues maybe added in the future for more user interaction. 

## License
This project is licensed under the MIT License - see the LICENSE file for details. Copyright 2013-2023 Start Bootstrap LLC. Code released under the MIT license.


  