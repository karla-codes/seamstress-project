const carousels = document.querySelectorAll("header h1, header h2");
const fadeInTimeline = gsap.timeline();

fadeInTimeline.set(carousels, { opacity: 0 });
fadeInTimeline.to(carousels, { opacity: 1, delay: 1, stagger: 1, duration: 3 });

carousels.forEach((carousel) => {
  const spanTag = carousel.querySelector("span");
  const spanWidth = spanTag.clientWidth;

  for (let i = 0; i < 20; i++) {
    // this clones the spanTag
    carousel.appendChild(spanTag.cloneNode(true));
  }

  const movementTimeline = gsap.timeline({
    repeat: -1,
  });

  movementTimeline.set(carousel, { x: 0 });
  movementTimeline.to(carousel, {
    x: spanWidth * -1,
    duration: 6,
    ease: "linear",
  });
});
