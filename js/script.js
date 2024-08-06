const header = document.querySelector(".header");
const btnMenu = document.querySelector(".btn-mobile-nav");
let hiddenMenu = true;

btnMenu.addEventListener("click", function () {
  if (hiddenMenu) {
    header.classList.add("nav-open");
    hiddenMenu = false;
  } else {
    header.classList.remove("nav-open");
    hiddenMenu = true;
  }
});

//Sticky navigation
const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-200px",
  }
);

obs.observe(sectionHeroEl);
