const bodyElement = document.body;

// Append
bodyElement.append("Hello Universe");

// Append Child
const divElement = document.createElement("div");
divElement.innerText = "Hello Div";
bodyElement.appendChild(divElement);

divElement.remove();