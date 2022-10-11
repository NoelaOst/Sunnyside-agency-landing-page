const navList = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const contactBtn = document.querySelector(".contact-btn");
const navListLink = document.querySelectorAll(".nav-list-link");


hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
    contactBtn.classList.toggle("active");
    hamburger.classList.toggle("active");
    document.querySelector("body").classList.toggle("active");
});

navListLink.forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("active");
        contactBtn.classList.remove("active");
        hamburger.classList.remove("active");
        document.querySelector("body").classList.remove("active");
    });
});