const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", handleMouseMove);
});

function handleMouseMove(e) {
  const rect = this.getBoundingClientRect();
  const mouseX = e.clientX - rect.left - rect.width / 2;
  const mouseY = e.clientY - rect.top - rect.height / 2;

  let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

  angle = (angle + 360) % 360;

  this.style.setProperty("--start", angle + 60);
}

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const images = Array.from(carousel.children);

    // Duplicate images for seamless looping
    images.forEach(img => {
        let clone = img.cloneNode(true);
        carousel.appendChild(clone);
    });
});