// selects slide show container
const slides = document.querySelector("section div.slides");

let currentImg = 0;
let z = 1000000;

// selects images and adds them to a list
const images = document.querySelectorAll("img");
console.log(images);

// sets the z-index for each image
images.forEach(image => {
  z--;
  image.style.zIndex = z;
});

// slide function
// each click decreases the z-index of current image and sends it to the bottom
slides.addEventListener("click", function () {
  z--;
  images[currentImg].style.zIndex = z;
  currentImg++;
  currentImg = currentImg % images.length;
});