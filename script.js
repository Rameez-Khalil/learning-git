const loadingText = document.querySelector(".loading-text");
const background = document.querySelector(".backgroundImage");

const loading = setInterval(blurImage, 40);

let loadingValue = 0;

function blurImage() {
  loadingValue++;
  if (loadingValue > 99) {
    clearInterval(loading);
  }
  loadingText.innerText = `${loadingValue}%`;
  loadingText.style.opacity = scale(loadingValue, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(loadingValue, 0, 100, 30, 0)}px)`;
  console.log(background.style.filter);
}

blurImage();

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
