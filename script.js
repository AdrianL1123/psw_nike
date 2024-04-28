var typed = new Typed(".typewriter", {
  strings: [
    "Just Do It.",
    "Step Up Your Game.",
    "Look Good. Feel Good.",
    "Walk The Path Less Taken.",
    "You Don't Need Wings To Fly.^250",
    "Discover Your Sole Identity.^250",
  ],
  typeSpeed: 64,
  backSpeed: 25,
  loop: true,
});

const navbar = document.getElementById("navbar-scrollspy");

window.addEventListener("scroll", () => {
  if (this.window.scrollY > 150) {
    navbar.style.borderBottom = "1px solid black";
  } else {
    navbar.style.borderBottom = "none";
  }
});
