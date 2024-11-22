
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileNav = document.querySelector("#mobile-nav");
const navLinks = document.querySelectorAll("#mobile-nav a");

const openMenu = () => {
  gsap.to(mobileNav, { top: 0, duration: 0.5, ease: "power3.inOut" });
  gsap.fromTo(
    navLinks,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, stagger: 0.2, duration: 0.5 }
  );
  menuIcon.style.display = "none"; // Hide menu icon
  closeIcon.style.display = "block"; // Show close icon
};

const closeMenu = () => {
  gsap.to(mobileNav, { top: "-100%", duration: 0.5, ease: "power3.inOut" });
  menuIcon.style.display = "block"; // Show menu icon
  closeIcon.style.display = "none"; // Hide close icon
};

// Add event listeners
menuIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);
