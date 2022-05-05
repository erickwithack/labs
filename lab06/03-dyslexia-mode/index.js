/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const doSomething = () => {
  let keyedIn = window.localStorage.getItem("dyslexic") === "true";
  if (keyedIn) {
    document.body.classList.add("dyslexia-mode");
  }
  var toggle_perhaps = document.querySelector("#dyslexia-toggle");
  if (keyedIn) {
    toggle_perhaps.setAttribute("keyedIn", "true");
  }
  toggle_perhaps.addEventListener("click", addDyslexicMode);
};

const addDyslexicMode = (ev) => {
  let penis = ev.currentTarget.getAttribute("keyedIn") === "true";
  let not_that = !penis;
  ev.currentTarget.setAttribute("keyedIn", not_that);
  document.body.classList.toggle("dyslexia-mode");
  window.localStorage.setItem("dyslexic", not_that);
};

doSomething();
