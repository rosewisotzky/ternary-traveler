import getAllPlaces from "./placesCollection"
export default {
// This function calls getAllPlaces, which returns an array of objects. It will eventually loop through the array that is returned and call the functions to build HTML for each of the objects in our array.
    listAllPlaces () {
        getAllPlaces.getPlaces().then(placesArray =>
            console.log("PLACEs ArRay", placesArray))
    }
}