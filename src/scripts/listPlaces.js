import getAllInterests from "./placesCollection"
// import placeBuildHtml from "./domManager"
import build from "./places"
export default {
    // This method calls getAllPlaces, which returns an array of objects. It will eventually loop through the array that is returned and call the methods to build HTML for each of the objects in our array.
    listAllInterests() {
        // Here we are just calling the get places method and console logging what that returns. It's an array of objects from our database!
        getAllInterests.getInterests().then(interestsArray => {
            console.log("interests ArRay", interestsArray);
            // We are selecting the empty div on index.html and assigning it to a variable named interestContainer.
            let interestContainer = document.querySelector("#main-container")
            // We are creating a document fragment stored in the variable interestFragment to append our articles to in our forEach.
            let interestFragment = document.createDocumentFragment();
            interestsArray.forEach(interest => {
                // Our forEach takes the array of objects from our database and goes through each object in the array. For each (no pun intended) object, we call our buildInterestComponent and pass in the interest as the argument, letting our buildInterestComponent method know what to access for the values.
                let interestHTML = build.buildInterestComponent(interest)
                // We are appending our HTML elements in this forEach to our fragment.
                interestFragment.appendChild(interestHTML)
                console.log("fragment", interestFragment)
            })
            // And then appending that fragment to our container div which lives on the DOM!
            interestContainer.appendChild(interestFragment)
        })
    }
}