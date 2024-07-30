document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));
});

document.addEventListener("DOMContentLoaded", () => {
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");

    if (window.scrollY > lastScrollY) {
      // Scrolling down
      header.classList.add("hide");
    } else {
      // Scrolling up
      header.classList.remove("hide");
    }

    lastScrollY = window.scrollY;
  });
});
