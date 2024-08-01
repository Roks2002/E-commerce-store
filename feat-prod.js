document.addEventListener("DOMContentLoaded", () => {
  fetch("feat-prod.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("feat-prod-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
});
