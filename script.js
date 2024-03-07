const images = [
  "./img/image1.jpg",
  "./img/image2.jpg",
  "./img/image3.jpg",
  "./img/image4.jpg",
]; // Путь к изображениям
let currentImageIndex = 0;
const imgElement = document.querySelector("img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const indicators = document.querySelectorAll(".indicator");

function updateImage() {
  imgElement.src = images[currentImageIndex];
  indicators.forEach((indicator, index) => {
    if (index === currentImageIndex) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImage();
});

nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentImageIndex = index;
    updateImage();
  });
});

updateImage();
