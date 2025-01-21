
// Select menu icon and nav links
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Add animation class on page load
window.addEventListener("load", () => {
    menuToggle.classList.add("animate");
});

// Remove animation on first click
menuToggle.addEventListener("click", () => {
    menuToggle.classList.remove("animate"); // Stop blinking when clicked
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
});
// Back-to-Top Button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Show Modal on Page Load
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("query-modal");
    const closeBtn = document.querySelector(".close-btn");

    // Show the modal when the page loads
    modal.style.display = "flex";

    // Close modal when clicking the close button
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle form submission
    const form = document.getElementById("query-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your query has been submitted successfully!");
        modal.style.display = "none"; // Hide modal after submission
    });
});
