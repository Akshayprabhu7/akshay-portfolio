// Get the primary elements
const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const topButton = document.getElementById("topBtn"); // Changed ID to topBtn

/* Mobile menu functionality */
if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", isOpen); // Add for accessibility
    });
}

/* Native anchor scrolling + mobile menu closing */
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (nav.classList.contains("open")) {
            nav.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false"); // Update accessiblity state
        }
    });
});

/* Automatically highlight the current section in the navbar */
function updateActiveNav() {
    let current = "";
    // Offset for the fixed header
    const position = window.scrollY + 120;

    sections.forEach((section) => {
        if (position >= section.offsetTop) {
            current = section.id;
        }
    });

    navLinks.forEach((link) => {
        // Find the matching anchor link
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Attach the scroll listener to highlight sections
window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav); // Call on load

/* "Back to top" button functionality */
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        topButton.classList.add("show"); // Changed show for visible
    } else {
        topButton.classList.remove("show");
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* =====================================================
   DIRECT SOCIAL PROFILE LINKS
   The click logic uses the exact profile URLs supplied by Akshay.
===================================================== */

const LINKEDIN_URL = "https://www.linkedin.com/in/akshay-prabhu-n-6799542b5/";
const GITHUB_URL = "https://github.com/Akshayprabhu7";

// Ensure we have data attributes to target
document.querySelectorAll('[data-social="linkedin"]').forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
    });
});

document.querySelectorAll('[data-social="github"]').forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        window.open(GITHUB_URL, "_blank", "noopener,noreferrer");
    });
});