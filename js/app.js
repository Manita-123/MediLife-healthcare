
const menu = document.querySelector(".menu");
const navUl = document.querySelector(".nav-menu");

menu.addEventListener("click", () => { 
    navUl.classList.toggle("show");
})

