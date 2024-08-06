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

document.getElementById("sort").addEventListener("change", function () {
  const sortBy = this.value;
  let items = Array.from(document.querySelectorAll(".pro"));
  items.sort((a, b) => {
    const aPrice = parseFloat(
      a.querySelector(".price").innerText.replace("$", "")
    );
    e;
    const bPrice = parseFloat(
      b.querySelector(".price").innerText.replace("$", "")
    );
    const aName = a.querySelector(".name").innerText.toLowerCase();
    const bName = b.querySelector(".name").innerText.toLowerCase();

    switch (sortBy) {
      case "price-asc":
        return aPrice - bPrice;
      case "price-desc":
        return bPrice - aPrice;
      case "name-asc":
        return aName.localeCompare(bName);
      case "name-desc":
        return bName.localeCompare(aName);
      default:
        return 0;
    }
  });

  const container = document.querySelector(".pro-container");
  container.innerHTML = "";
  items.forEach((item) => container.appendChild(item));
});
