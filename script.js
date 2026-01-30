const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  faders.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      section.classList.add("show");
    }
  });
});
