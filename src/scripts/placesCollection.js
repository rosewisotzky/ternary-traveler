export default {
    // This is our GET call to return the places from our database as javaScript. It is making an asynchronous request to our database, taking the response and parsing it into JSON.
    getInterests () {
        // Expanding the place inside of interests so we can access the place key value pairs
        return fetch("http://localhost:8088/interests?_expand=place").then(response => response.json())
    },

}