import "./styles.css";
import "./pageStyles/homeStyle.css";
import { aboutData } from "./pages/about.js";
import { homeData } from "./pages/home.js";
import { menuData } from "./pages/menu.js";
import { samePageBehaviour } from "./behaviour.js";

// menu related section
let currentPage = "Home";

// generating content
const content = document.getElementById("main-content");

// create event for menu click and change the content base on menu
const menuButtons = document.getElementsByClassName("menu-link");

// function for menu button
const menuClickEvent = (e) => {
  samePageBehaviour();

  // changing the page location
  currentPage = e.target.innerText;

  // menu changing using object mapping
  const pages = {
    Home: renderHome,
    Menu: renderMenu,
    About: renderAbout,
  };

  pages[currentPage]?.();
};

// adding click event listener for menu button
for (var i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener("click", menuClickEvent);
}

// functions for rendering content
const renderHome = () => {
  content.innerHTML = homeData();
};
const renderMenu = () => {
  content.innerHTML = menuData();
};
const renderAbout = () => {
  content.innerHTML = aboutData();
};

// rendering home for the first time
// renderHome();
