document.addEventListener("DOMContentLoaded", function() {
  const placeholder = document.getElementById("header-placeholder");

  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      placeholder.innerHTML = data;

      const currentPage = window.location.pathname.split("/").pop();
      const navLinks = placeholder.querySelectorAll("nav a");

      navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
          link.classList.add("active");
        }
      });
    });
});
