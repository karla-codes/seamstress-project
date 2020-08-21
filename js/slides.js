// selects slide show container
const slides = document.querySelectorAll("section div.slides");

slides.forEach(slide => {
  let currentImg = 0;
  let z = 1000000;
  
  // selects images and adds them to a list
  const images = slide.querySelectorAll("img");
  console.log(images);
  
  // sets the z-index for each image
  images.forEach(image => {
    z--;
    image.style.zIndex = z;
  });
  
  // slide function
  // each click decreases the z-index of current image and sends it to the bottom
  slide.addEventListener("click", function () {
    z--;
    images[currentImg].style.zIndex = z;
    currentImg++;
    currentImg = currentImg % images.length;
  });
})

