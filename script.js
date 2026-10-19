/*
  BUTTER BLOOM — site settings
  1) Add your WhatsApp number below using country code, numbers only.
     Example format for India: 919876543210 (do not include +, spaces or dashes)
  2) Add your Instagram profile URL below.
*/
const WHATSAPP_NUMBER = "918281433326"; 
const INSTAGRAM_URL = "https://www.instagram.com/_letscelebratetogether?exln=MW1qemR4eG4yNjdwMQ==";

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const instagramLink = document.getElementById("instagramLink");
if (INSTAGRAM_URL.trim()) {
  instagramLink.href = INSTAGRAM_URL;
} else {
  instagramLink.href = "#contact";
  instagramLink.addEventListener("click", event => {
    event.preventDefault();
    alert("Add your Instagram profile URL in script.js to activate this link.");
  });
}

function openWhatsApp(message) {
  if (!WHATSAPP_NUMBER.trim()) {
    alert("WhatsApp ordering is nearly ready! Add your WhatsApp number in script.js first. Use country code and digits only, for example 919876543210.");
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.getElementById("floatingWhatsApp").addEventListener("click", event => {
  if (!WHATSAPP_NUMBER.trim()) {
    event.preventDefault();
    alert("Add your WhatsApp number in script.js first to activate quick ordering.");
  } else {
    event.preventDefault();
    openWhatsApp("Hi Butter Bloom! I'd like to enquire about your products and celebration packages.");
  }
});

document.getElementById("enquiryForm").addEventListener("submit", event => {
  event.preventDefault();
  const error = document.getElementById("formError");
  error.textContent = "";

  if (!WHATSAPP_NUMBER.trim()) {
    error.textContent = "To send this enquiry, first add your WhatsApp number in script.js. Your form details are still here, so you can copy them before refreshing.";
    alert("Please add your WhatsApp number in script.js to send enquiries. The form is ready to use once the number is configured.");
    return;
  }

  const form = new FormData(event.currentTarget);
  const name = form.get("name").trim();
  const phone = form.get("phone").trim();
  const service = form.get("service");
  const date = form.get("date") || "Not specified";
  const budget = form.get("budget") || "Not specified";
  const message = form.get("message").trim() || "No additional details";
  const text = [
    "Hi Butter Bloom! I'd like to make an enquiry.",
    "",
    `Name: ${name}`,
    `Contact number: ${phone}`,
    `Looking for: ${service}`,
    `Date needed: ${date}`,
    `Approximate budget: ${budget}`,
    `Details: ${message}`,
    "",
    "Please let me know the available options. Thank you!"
  ].join("\\n");
  openWhatsApp(text);
});
