function handleScroll() {
  const arrow = document.querySelector(".arrow");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 50) {
    // Adjust the 50px to when you want the arrow to hide
    arrow.classList.add("hidden");
  } else {
    arrow.classList.remove("hidden");
  }
}

// Add the scroll event listener
window.addEventListener("scroll", handleScroll);

// Handle arrow click
document.getElementById("scroll-arrow").addEventListener("click", function () {
  const featureSection = document.getElementById("feat-products");
  window.scrollTo({
    top: featureSection.offsetTop + 100, // Adjust 100px to your desired extra scroll distance
    behavior: "smooth",
  });
});
