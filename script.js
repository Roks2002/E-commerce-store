function handleScroll() {
  const arrow = document.querySelector(".arrow");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  /* Arrow scroll hide */
  if (scrollTop > 100) {
    arrow.classList.add("hidden");
  } else {
    arrow.classList.remove("hidden");
  }
}

// Scroll event listener za arrow
window.addEventListener("scroll", handleScroll);

// Handle arrow click
document.getElementById("scroll-arrow").addEventListener("click", function () {
  const featureSection = document.getElementById("feat-prod");
  window.scrollTo({
    top: featureSection.offsetTop + 0,
    behavior: "smooth",
  });
});

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
  MainImg.src = smallimg[0].src;
};

smallimg[1].onclick = function () {
  MainImg.src = smallimg[1].src;
};

smallimg[2].onclick = function () {
  MainImg.src = smallimg[2].src;
};
