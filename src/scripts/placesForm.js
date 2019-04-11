import placesAPI from "./placesCollection"
import build from "./places"

export default {
    // This method selects the empty container in our index.html and calls the buildInterestForm method and appends that to the display container.
    appendNewInterestForm () {
        const displayContainer = document.querySelector("#main-container")
        displayContainer.appendChild(build.buildInterestForm())


    }
}