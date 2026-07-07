// Smooth scroll for internal nav links only
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Skills animation
const skills = document.querySelectorAll(".level");

window.addEventListener("scroll", () => {
  skills.forEach((skill) => {
    skill.style.width = skill.style.width;
  });
});
