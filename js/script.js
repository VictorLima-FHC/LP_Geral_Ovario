const buttons = document.querySelectorAll(".s2-btn");
const sections = document.querySelectorAll(
  "#sec-s4, #sec-s5, #sec-s6, #sec-s7, #sec-s8"
);

const OFFSET = 120;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const target = document.getElementById(targetId);

    if (target) {
      const top =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        OFFSET;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  });
});

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - OFFSET;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  buttons.forEach((btn) => {
    btn.classList.remove("active");

    if (btn.getAttribute("data-target") === currentSection) {
      btn.classList.add("active");
    }
  });
});