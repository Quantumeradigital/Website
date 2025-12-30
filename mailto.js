<script>

// Contact form -> opens default email app (no backend)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// TODO: change this to YOUR email:
const QUOTE_EMAIL_TO = "your@email.com";
const QUOTE_SUBJECT = "Quote Request";

function enc(v) {
  return encodeURIComponent(v).replace(/[!'()*]/g, c =>
    "%" + c.charCodeAt(0).toString(16).toUpperCase()
  );
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(contactForm);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const service = (data.get("service") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    if (!name || !email || !service || !message) {
      if (formStatus) formStatus.textContent = "Please fill in all fields so we can draft your email.";
      return;
    }

    const body = [
      "Hi,",
      "",
      "I'd like to request a quote. Here are my details:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      "Project details:",
      message,
      "",
      "Thanks!"
    ].join("\n");

    const mailtoUrl =
      `mailto:${QUOTE_EMAIL_TO}` +
      `?subject=${enc(QUOTE_SUBJECT)}` +
      `&body=${enc(body)}`;

    window.location.href = mailtoUrl;

    if (formStatus) formStatus.textContent = "Opening your email app…";
  });
}


</script>