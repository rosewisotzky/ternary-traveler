export default {
    // This function creates HTML elements for us to use later on. It takes the arguments of elementType, elementID, elementTextcontent and elementValue.
    buildHTMLElement(elementType, elementID, elementTextContent, elementValue) {
        // Here we create our element and pass in what type of element we want to create
        const htmlElement = document.createElement(elementType);
        // These conditional statements tell us that when we pass in the ID or Value, our function will automatically set those attributes as what we passed in.
        if (elementID) {
            htmlElement.setAttribute("id", elementID);
        }
        if (elementValue) {
            htmlElement.setAttribute("value", elementValue)
        }
        // Here we are saying that what we pass in as the text content argument will be what the actual text content of our element is.
        htmlElement.textContent = elementTextContent
    }
}