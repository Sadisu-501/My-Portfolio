const menuBtn = document.getElementById("menuBtn");
const navContents = document.querySelector(".nav-contents");
const cards = document.querySelectorAll(".card");
menuBtn.addEventListener("click", () => {
  navContents.classList.toggle("active");
});




// Use Intersection Observer to detect when cards enter viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // add animation class
        observer.unobserve(entry.target); // optional: stop observing once shown
      }
    });
  },
  {
    threshold: 0.2, // trigger when 20% of card is visible
  },
);

// Attach observer to each card
cards.forEach((card) => {
  observer.observe(card);
});
