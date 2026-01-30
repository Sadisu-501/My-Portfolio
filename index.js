const menuBtn = document.getElementById("menuBtn");
const navContents = document.querySelector(".nav-contents");

menuBtn.addEventListener("click", () => {
  navContents.classList.toggle("active");
});
