// selects slide show container
const slides = document.querySelectorAll("section div.slides");

slides.forEach((slide) => {
  let currentImg = 0;
  let z = 1000000;

  // selects images and adds them to a list
  const images = slide.querySelectorAll("img");
  console.log(images);

  // sets the z-index for each image
  images.forEach((image) => {
    z--;
    image.style.zIndex = z;
  });

  // after images receive their z-index, add GSAP animation
  const timeline = gsap.timeline();
  // if we want to use % as a measurement add quotes
  timeline.set(images, {
    x: () => {
      return 500 * Math.random() - 250;
    },
    y: "500%",
    rotation: () => {
      return 90 * Math.random() - 45;
    },
  });
  timeline.to(images, { x: 0, y: 0, stagger: -0.25, duration: 1.4 });
  timeline.to(images, {
    rotation: () => {
      return 16 * Math.random() - 8;
    },
  });

  // slide function
  // each click decreases the z-index of current image and sends it to the bottom
  slide.addEventListener("click", function () {
    z--;
    let direction = "150%";
    let midAngle = 15;

    if (Math.random() > 0.5) {
      direction = "-150%";
      midAngle = -15;
    }

    const currentImage = images[currentImg];

    const flipTimeline = gsap.timeline();
    flipTimeline.set(currentImage, { x: 0 });
    flipTimeline.to(currentImage, {
      x: direction,
      rotation: midAngle,
    });
    flipTimeline.set(currentImage, { zIndex: z });
    flipTimeline.to(currentImage, {
      x: 0,
      rotation: () => {
        return 16 * Math.random() - 8;
      },
    });
    currentImg++;
    currentImg = currentImg % images.length;
  });
});
