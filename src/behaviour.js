// dim the active menu
const menuBehaviour = (e) => {
  // adding style with the same page
  e.target.style.opacity = "0.75";
  e.target.style.cursor = "auto";
};

const samePageBehaviour = (currentPage, e) => {
  // check if the user clicked the same page
  if (currentPage == e.target.innerText) {
    return;
  }
};

export { menuBehaviour, samePageBehaviour };
