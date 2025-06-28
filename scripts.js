
document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach(slider => {
    let current = 0;
    const images = slider.querySelectorAll('img');

    function showSlide(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    slider.addEventListener('click', () => {
      current = (current + 1) % images.length;
      showSlide(current);
    });
  });
});
