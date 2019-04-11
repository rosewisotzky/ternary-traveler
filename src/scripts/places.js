// Places component that displays our information on the dom
// example:     // <article>
//   <h3>Interest Name</h3>
//   <p>Interest Location</p>
//   <p>Interest Description</p>
//   <p>Interest cost</p>
//   <p>Interest Review</p>
// </article>

export default {
    buildInterestComponent(interest) {
        // Inside of this function we are creating our HTML elements and using the argument to target our values from our database. This function is called inside of a forEach loop in our listPlaces so the argument passed in here represents the object and its values.
        const interestArticle = document.createElement("article");
        const interestHeader = document.createElement("h3")
        interestHeader.textContent = interest.name;

        const interestLocationParagraph = document.createElement("p")
        interestLocationParagraph.id = `location--${interest.id}`;
        interestLocationParagraph.textContent = interest.place.location;

        const interestDescriptionParagraph = document.createElement("p");
        interestDescriptionParagraph.id = `description--${interest.id}`;
        interestDescriptionParagraph.textContent = interest.description;

        const interestCostParagraph = document.createElement("p");
        interestCostParagraph.id = `cost--${interest.cost}`;
        interestCostParagraph.textContent = interest.cost;

        const interestReviewParagraph = document.createElement("p");
        interestReviewParagraph.id = `review--${interest.id}`;
        interestReviewParagraph.textContent = interest.review;
        // Here we are appending each of our elements to the article which contains them.
        interestArticle.appendChild(interestHeader);
        interestArticle.appendChild(interestLocationParagraph);
        interestArticle.appendChild(interestDescriptionParagraph);
        interestArticle.appendChild(interestCostParagraph);
        interestArticle.appendChild(interestReviewParagraph);

        return interestArticle
    },
    // This is the method to build a form for the user to track a new point of interest.
    buildInterestForm() {
        // We are building an article to contain our form.
        const newInterestArticle = document.createElement("article");
        newInterestArticle.id = "newInterestArticle"
        // Inside of our form we want a label and input for the name, destination, and cost, so we are using createElement to make them and append them to our article.
        const newInterestNameLabel = document.createElement("label");
        newInterestNameLabel.id = "newInterestLabel"
        newInterestNameLabel.textContent = "Name: "
        newInterestArticle.appendChild(newInterestNameLabel);
        const newInterestNameInput = document.createElement("input");
        newInterestNameInput.id = "newInterestNameInput";
        newInterestArticle.appendChild(newInterestNameInput);

        const newInterestDestinationLabel = document.createElement("label");
        newInterestDestinationLabel.id = "newInterestDestinationLabel"
        newInterestDestinationLabel.textContent = "Destination: "
        newInterestArticle.appendChild(newInterestDestinationLabel);

        const newInterestDestinationInput = document.createElement("input");
        newInterestDestinationInput.id = "newInterestDestinationInput";
        newInterestArticle.appendChild(newInterestDestinationInput);

        const newInterestCostLabel = document.createElement("label");
        newInterestCostLabel.id = "newInterestCostLabel"
        newInterestCostLabel.textContent = "Cost: "
        newInterestArticle.appendChild(newInterestCostLabel);

        const newInterestCostInput = document.createElement("input");
        newInterestCostInput.id = "newInterestCostInput";
        newInterestArticle.appendChild(newInterestCostInput);
        // Here we are building our dropdown to select where we want to add our new point of interest.
        const newInterestDropdown = document.createElement("select");
        newInterestDropdown.id = "newInterestPlace";
        newInterestDropdown.name = "Location"
        newInterestArticle.appendChild(newInterestDropdown);

        const newInterestOption1 = document.createElement("option");
        newInterestOption1.id = "newInterestLocation1";
        newInterestOption1.value = "BuenosAires";
        newInterestOption1.textContent = "Buenos Aires";
        newInterestDropdown.appendChild(newInterestOption1);

        const newInterestOption2 = document.createElement("option");
        newInterestOption2.id = "newInterest2Location";
        newInterestOption2.value = "santiago";
        newInterestOption2.textContent = "Santiago";
        newInterestDropdown.appendChild(newInterestOption2);

        const newInterestOption3 = document.createElement("option");
        newInterestOption3.id = "newInterest3Location";
        newInterestOption3.value = "rioDeJaneiro";
        newInterestOption3.textContent = "Rio de Janeiro";
        newInterestDropdown.appendChild(newInterestOption3);
        // We are creating a button that says 'Save New Interest' to our form, to which we will add functionality to POST it to our database.
        const saveNewInterestButton = document.createElement("button");
        saveNewInterestButton.id = "saveNewInterest";
        saveNewInterestButton.textContent = "Save New Interest";
        newInterestArticle.appendChild(saveNewInterestButton)

        console.log(newInterestArticle, newInterestNameLabel, newInterestNameInput);

        return newInterestArticle;
    }
}