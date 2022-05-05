let x = 22.4;

const makeBigger = () => {
  x += 2;
  let new_font = `${x}px`;
  document.querySelector(".content").style.fontSize = new_font;
  document.querySelector("h1").style.fontSize = new_font;
};

const makeSmaller = () => {
  if (x != 0) {
    x -= 2;
  }
  let new_font = `${x}px`;
  document.querySelector(".content").style.fontSize = new_font;
  document.querySelector("h1").style.fontSize = new_font;
};

document.querySelector("#a1").addEventListener("click", makeBigger);
document.querySelector("#a2").addEventListener("click", makeSmaller);
