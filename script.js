let scrollContainer = document.querySelector(".gallery");
let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");

scrollContainer.addEventListener("wheel", function (evt) {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", function () {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", function () {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});
