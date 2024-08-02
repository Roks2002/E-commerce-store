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
