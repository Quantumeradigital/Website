// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");

navToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  mobileNav.setAttribute("aria-hidden", String(!isOpen));
});

// Close mobile nav on link click
mobileNav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
  });
});

// FAQ accordion
document.querySelectorAll("[data-faq]").forEach((wrap) => {
  const btn = wrap.querySelector(".faq-q");
  const ans = wrap.querySelector(".faq-a");

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";

    // close others
    document.querySelectorAll("[data-faq]").forEach((w) => {
      const b = w.querySelector(".faq-q");
      const a = w.querySelector(".faq-a");
      b.setAttribute("aria-expanded", "false");
      a.hidden = true;
    });

    // toggle current
    btn.setAttribute("aria-expanded", String(!expanded));
    ans.hidden = expanded;
  });
});

// Demo form submission (replace with your backend/service)
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.textContent = "Message sent. We’ll get back to you shortly.";
  status.style.opacity = "1";
  form.reset();
});
