const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  new Watch(slide, {
      threshold: 0.6,
  }).inView(() => {
    const image_id = slide.dataset.image;
    const image_div = document.querySelector(`[data-id='${image_id}']`);
    const active_image_div = document.querySelector(".image.active");

    if (active_image_div) {
      active_image_div.classList.remove("active");
    }

    if (image_div) {
      image_div.classList.add("active");
    }
  });
});