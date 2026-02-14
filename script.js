const wrapper = document.querySelector(".wrapper");
const question = document.querySelector("#question");
const gif = document.querySelector("#gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I Love You Too, Mishu! ❤️";
  gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpndWp3ZzRyeGZ3bm92Z3R4bm92Z3R4bm92Z3R4bm92Z3R4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/K97ba8H05f4xJ972fO/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
