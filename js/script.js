const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const quoteForm = document.querySelector("#quote-form");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (siteNav && siteNav.classList.contains("open")) {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    }
  });
});

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const service = document.querySelector("#service").value;
    const message = document.querySelector("#message").value.trim();

    const subject = encodeURIComponent(`Estimate Request: ${service}`);
    const body = encodeURIComponent(
`Name: ${name}
Phone: ${phone}
Service Needed: ${service}

Project Details:
${message}`
    );

    window.location.href =
      `mailto:info@germanhandymanservices.com?subject=${subject}&body=${body}`;
  });
}