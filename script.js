// Mobile menu
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector("[data-nav-links]");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Fake form submit (preview mode)
window.handleSubmit = (event) => {
  event.preventDefault();
  const status = document.getElementById("formStatus");
  status.textContent = "✅ Message saved (preview mode). We can connect a real form once hosted.";
  event.target.reset();
  return false;
};
