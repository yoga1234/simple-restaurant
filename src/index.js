import "./styles.css";

// generating content
const content = document.getElementById("main-content");

const paragraph = document.createElement("p");
paragraph.textContent = "Testing generating content using webpack";

content.appendChild(paragraph);

// create event for menu click and change the content base on menu
