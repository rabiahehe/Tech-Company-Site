/* =====================================================
   BRIGHTBYTE - MAIN JAVASCRIPT
   Sections:
   1. Mobile menu
   2. Highlight current page in menu
   3. Footer year
   4. Courses filter (courses.html)
   5. Blog search (blog.html)
   6. Contact form validation (contact.html)

   TIP: If something breaks, open the browser console
   (press F12 -> Console) to see the error message.
   ===================================================== */


/* ---------- 1. MOBILE MENU ---------- */
// Button and menu are in the header of every page
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    // Add or remove the "open" class (CSS shows/hides the menu)
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });
}


/* ---------- 2. HIGHLIGHT CURRENT PAGE IN MENU ---------- */
// Gets the file name of the current page, e.g. "about.html"
let currentPage = window.location.pathname.split("/").pop();
if (currentPage === "") currentPage = "index.html"; // when URL ends with "/"

// Loop through all menu links and mark the matching one
document.querySelectorAll(".main-nav a").forEach(function (link) {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});


/* ---------- 3. FOOTER YEAR ---------- */
// Puts the current year inside <span id="year"></span>
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();


/* ---------- 4. COURSES FILTER ---------- */
// Buttons have data-filter="web" etc. Cards have data-category="web" etc.
const filterButtons = document.querySelectorAll(".filter-btn");
const courseCards = document.querySelectorAll(".course-card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const chosen = button.getAttribute("data-filter");

    // Move the "active" look to the clicked button
    filterButtons.forEach(function (b) { b.classList.remove("active"); });
    button.classList.add("active");

    // Show matching cards, hide the others
    courseCards.forEach(function (card) {
      const category = card.getAttribute("data-category");
      if (chosen === "all" || chosen === category) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});


/* ---------- 5. BLOG SEARCH ---------- */
const blogSearch = document.getElementById("blogSearch");
const blogPosts = document.querySelectorAll(".blog-post");
const noResults = document.getElementById("noResults");

if (blogSearch) {
  // "input" runs every time the user types a letter
  blogSearch.addEventListener("input", function () {
    const text = blogSearch.value.toLowerCase().trim();
    let visibleCount = 0;

    blogPosts.forEach(function (post) {
      // Search in the whole text of the post card
      const match = post.textContent.toLowerCase().includes(text);
      post.classList.toggle("hidden", !match);
      if (match) visibleCount++;
    });

    // Show "no results" message when nothing matches
    noResults.classList.toggle("hidden", visibleCount > 0);
  });
}


/* ---------- 6. CONTACT FORM VALIDATION ---------- */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    // Stop the page from reloading
    event.preventDefault();

    // Get the form fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const success = document.getElementById("formSuccess");

    let isValid = true; // becomes false if any check fails

    // --- Check name ---
    if (name.value.trim().length < 2) {
      showError(name, "Please enter your name.");
      isValid = false;
    } else {
      clearError(name);
    }

    // --- Check email (simple pattern: something@something.something) ---
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      showError(email, "Please enter a valid email address.");
      isValid = false;
    } else {
      clearError(email);
    }

    // --- Check message ---
    if (message.value.trim().length < 10) {
      showError(message, "Message must be at least 10 characters.");
      isValid = false;
    } else {
      clearError(message);
    }

    // --- If everything is fine ---
    if (isValid) {
      // NOTE: A real site would send the data to a server here.
      success.classList.remove("hidden");
      contactForm.reset();
    } else {
      success.classList.add("hidden");
    }
  });
}

// Shows a red message under a field
function showError(input, text) {
  input.classList.add("input-error");
  input.parentElement.querySelector(".error-msg").textContent = text;
}

// Removes the red message
function clearError(input) {
  input.classList.remove("input-error");
  input.parentElement.querySelector(".error-msg").textContent = "";
}
