let navButton = document.querySelector(".nav-button");
let navMenu =document.querySelector(".nav-menu");

navButton.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu-toogle");
})