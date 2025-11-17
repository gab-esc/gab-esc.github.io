document.addEventListener("DOMContentLoaded", function() {
  const headerPlaceholder = document.getElementById("header-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");

  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      headerPlaceholder.innerHTML = data;

      const currentPage = window.location.pathname.split("/").pop();
      const navLinks = headerPlaceholder.querySelectorAll("nav a");

      navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
          link.classList.add("active");
        }
      });
    });

  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      footerPlaceholder.innerHTML = data;
    });
});
