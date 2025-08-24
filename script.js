const displayedImg = document.getElementById("displayed-img");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    displayedImg.src = thumbnail.src;
    thumbnails.forEach(img => img.classList.remove("active"));
    thumbnail.classList.add("active");
  });
});