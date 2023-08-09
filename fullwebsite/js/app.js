const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  );
};
// navbar

const links = getElement(".nav-links");
const navBtn = getElement(".nav-btn");
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
// navbar ends

// footer
const date = getElement("#date")
// end of footer
