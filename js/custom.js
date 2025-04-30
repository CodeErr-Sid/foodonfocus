const headerFilter = document.querySelector(".header-filter");
const footerFilter = document.querySelector(".footer-filter");
const contentSections = document.querySelectorAll(".fof-content-container section");
const contentContainer = document.querySelector(".fof-content-container");

// Shared function to update everything based on selected value
function setActiveFilter(filterValue, shouldScroll = false) {
  // Show correct content
  contentSections.forEach(section => {
    section.classList.toggle(
      "fof-content-show",
      section.classList.contains(`fof-content-${filterValue}`)
    );
  });

  // Sync active class in BOTH header and footer
  [headerFilter, footerFilter].forEach(filter => {
    filter.querySelectorAll(".fof-content-item").forEach(item => {
      item.classList.toggle("mil-active", item.dataset.filter === filterValue);
    });
  });

  // Scroll to middle only if footer clicked
  if (shouldScroll && contentContainer) {
    const rect = contentContainer.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const offset = rect.top + scrollY - (window.innerHeight / 2) + (rect.height / 2);

    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  }
}

// Header click → sync both, no scroll
headerFilter.addEventListener("click", (e) => {
  const item = e.target.closest(".fof-content-item");
  if (item) {
    const filterValue = item.dataset.filter;
    setActiveFilter(filterValue, false);
  }
});

// Footer click → sync both, do scroll
footerFilter.addEventListener("click", (e) => {
  const item = e.target.closest(".fof-content-item");
  if (item) {
    const filterValue = item.dataset.filter;
    setActiveFilter(filterValue, true);
  }
});
