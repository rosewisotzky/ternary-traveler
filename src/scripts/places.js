// Places component that displays our information on the dom
// example:     // <article>
//   <h3>Interest Name</h3>
//   <p>Interest Location</p>
//   <p>Interest Description</p>
//   <p>Interest cost</p>
//   <p>Interest Review</p>
// </article>

export default {
    buildInterestComponent (interest) {
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
    buildInterestForm () {
        const newInterestArticle = document.createElement("article");
        newInterestArticle.id = "newInterestArticle"

        const newInterestNameLabel = document.createElement("label");
        newInterestNameLabel.id = "newInterestLabel"
        newInterestNameLabel.textContent = "Name: "

        const newInterestNameInput = document.createElement("input");

        console.log(newInterestArticle, newInterestLabel)
    }
}