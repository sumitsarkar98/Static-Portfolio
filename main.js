document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".custom-navbar"); // Ensure the class matches HTML

  if (!nav) return; // Prevents errors if navbar is not found

  window.addEventListener("scroll", () => {
    nav.classList.toggle("header-scrolled", window.scrollY > 20);
  });
});
