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

// rotating text
const text = document.querySelector(".cp-text");
text.innerHTML = text.innerText
    .split("")
    .map(
        (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
    )
    .join("");

// chart code
$(document).ready(function () {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Conversion Rate',
                data: [5, 10, 40, 35, 25, 50],
                borderColor: '#f9a825',
                backgroundColor: '#f9a825',
                fill: false,
                tension: 0.4
            },
            {
                label: 'Website Traffic',
                data: [10, 5, 20, 15, 40, 70],
                borderColor: '#ffffff',
                backgroundColor: '#ffffff',
                fill: false,
                tension: 0.4
            },
            {
                label: 'Overall Sales',
                data: [15, 30, 25, 40, 45, 120],
                borderColor: '#8b3e2f',
                backgroundColor: '#8b3e2f',
                fill: false,
                tension: 0.4
            }
        ]
    };

    const configLine = {
        type: 'line',
        data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#fff' }
                },
                y: {
                    ticks: { color: '#fff' },
                    beginAtZero: true
                }
            }
        }
    };

    const configBar = {
        type: 'bar',
        data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#fff' }
                },
                y: {
                    ticks: { color: '#fff' },
                    beginAtZero: true
                }
            }
        }
    };

    new Chart(document.getElementById('lineChart'), configLine);
    new Chart(document.getElementById('barChart'), configBar);
});