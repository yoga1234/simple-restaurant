import "./styles.css";

// menu related section
let currentPage = "None";

// generating content
const content = document.getElementById("main-content");

const paragraph = document.createElement("p");
paragraph.textContent = "Testing generating content using webpack";

content.appendChild(paragraph);

// create event for menu click and change the content base on menu
const menuButtons = document.getElementsByClassName("menu-link");

// function for menu button
const menuClickEvent = (e) => {
  // menu changing using object mapping
  const pages = {
    None: renderHome,
    Home: renderHome,
    Menu: renderMenu,
    About: renderAbout,
  };

  currentPage = e.target.innerText;
  pages[currentPage]?.();
};

// adding click event listener for menu button
for (var i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener("click", menuClickEvent);
}

// functions for rendering content
const renderHome = () => {
  content.innerHTML = "<h1>Ini adalah renderHome</h1>";
};
const renderMenu = () => {
  content.innerHTML = "<h1>Ini adalah renderMenu</h1>";
};
const renderAbout = () => {
  content.innerHTML = "<h1>Ini adalah renderAbout</h1>";
};

// rendering home for the first time
renderHome();
