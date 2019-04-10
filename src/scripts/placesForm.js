import placesAPI from "./placesCollection"
import htmlFunction from "./domManager"

export default {
    buildPlacesHTML (placesObject) {
        const placesArticle = htmlFunction.buildHTMLElement("article", `places--${placesObject.name}`)
        console.log(placesArticle)
    }
}