export default {
    // This is our GET call to return the places from our database as javaScript. It is making an asynchronous request to our database, taking the json and translating it to javaScript and returning it back to us.
    getPlaces () {
        return fetch("http://localhost:8088/places").then(response => response.json())
    }
}