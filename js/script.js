document.addEventListener("DOMContentLoaded", async function() {
  setupGallery();
  await loadHeader();
  await loadFooter();
});

function setupGallery() {
  const mainImage = document.getElementById("main-image");
  const thumbnails = document.querySelectorAll(".thumbnail");
  let activeThumbnail;

  if (thumbnails.length > 0) {
    activeThumbnail = thumbnails[0];
    activeThumbnail.classList.add("active-thumb");
  };

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
      activeThumbnail.classList.remove("active-thumb");
      activeThumbnail = this
      activeThumbnail.classList.add("active-thumb");
      mainImage.src = thumbnail.src;
    });
  });
}

async function loadHeader() {
  const headerPlaceholder = document.getElementById("header-placeholder");
  try {
    const navResponse = await fetch("/nav.html");
    const navData = await navResponse.text();
    headerPlaceholder.innerHTML = navData;
  } catch (error) {
    console.error("Could not load nav:", error);
  }

  console.log(window.location.pathname)

  const currentPage = normalizePath(window.location.pathname);
  const navLinks = headerPlaceholder.querySelectorAll("nav a");
  navLinks.forEach(link => {
    const linkPage = normalizePath(link.getAttribute("href"));

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

async function loadFooter() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  try {
    const footerResponse = await fetch("/footer.html");
    const footerData = await footerResponse.text();
    footerPlaceholder.innerHTML = footerData;
  } catch (error) {
    console.error("Could not load footer:", error);
  }
}

function normalizePath(path) {
  const normalized_path = path.replace("index.html", "");
  return normalized_path;
}
