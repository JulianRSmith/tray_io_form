## Installation

### Requirements

-   NodeJS - v11.10.0 or greater
-   NPM - 6.11.2 or greater
-   Git - 2.21.0 or greater

### How to download the files

Using your command line interface, navigate to the directory where you want this project to be saved. When here, run the following command:

`git clone [git repository link here]`

### How to run the files

Navigate to the project directory inside the folder where you downloaded the files and in your command line interface run the command:

`npm install`

This will install the required libraries and files needed to run the app. Once complete, in the same directory, run the command:

`npm start`

This will start the app and will open it in your default browser. If it fails to do this, open [http://localhost:3000](http://localhost:3000) instead.

## Code Explanation

The application is built using React, more specifically Create React App. It features a main App.js file which contains the global state of the application which via the use of conditional rendering, manages the displaying of it's child page components. As a result, this means that if a new page is required, it would be as simple as creating a new component and adding it's own state to the global state here in App.js.
Each page in the form is it's own component and as such has it's own dedicated JavaScript file for each. For example, the "User" page is in the "User.js" file, the "Privacy" page is in the "Privacy.js" file, and lastly the "Done" page is in the "Done.js" file. Furthermore, the necessary states required by each component are passed down from the main App component in App.js to these components.

### "User" Component

In the user component, the main form inputs are stored initially as an object inside of an array. This means that if the fields where to change, or a new one was to be added, this can be done simply by modifying this array. The component then maps over the items in the array and then renders them to the DOM. When a field's value has changed (when the user types a value), this calls the `handleChange` function which updates the value of the field in the global state in the main App component.
For the fields that require validation (Name, Email, Password), the `validateInput` function is called. This checks if the Name field has a value, if the email is valid (using RFC 2822 email validation), and if the password meets the password conditions in place. If they don't, then an error message is displayed below each field - in the case of the password field, the password criteria simply changes colour.
Also in the "User" component is a button which is only valid and thus clickable if all validation fields successfully pass their validation. Once clicked, the button updates the global state of the current active page in the parent App component. It does this by calling the `nextPage` function, and passing the event, the current page, and the next page as parameters. This therefore can mean that if the option to go back a page was required, then the this function's next page parameter would just need to be updated to contain the name of the previous page.

### Privacy Page

In the same way as the in the "User" component, the "Privacy" component features form input data for each privacy checkbox as an object stored inside of an array, whereby the component maps of the items in the array and renders each one to the DOM. As before, this means that if an input needed to be changed, removed, or added then it's just as simple as updating this array with the corresponding data.
As the "Privacy" page is the last input page it features a button which when clicked calls the parent `handleSubmit` function that is passed down via props to the component, which submits the form data and makes the app goes to the done page. In this function it gets all the form input values stored in the main global state and stores it in a new JavaScript object, which in turn is converted to JSON and logged to the console.

### Done Page

The "Done" page is rendered once the form is submitted and features content informing the user that the form is complete. The page also features an animated checkbox which when the global state `doneReady` is true, the CSS class to begin animation is applied.
