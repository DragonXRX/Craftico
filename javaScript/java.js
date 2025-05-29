"use strict";

let a = document.querySelector("header .links .icons");
let b = document.querySelector("header .links ul");

a.addEventListener("click", () => {
   if(b.classList.contains("d-none")) {
      b.classList.remove("d-none");
      b.classList.add("d-block");
   } else {
      b.classList.remove("d-block");
      b.classList.add("d-none");
   }
});


let c = document.querySelector("body footer p");
let dateNow = new Date();

c.innerHTML = `&copy; ${dateNow.getFullYear()} <span>Craftico</span> All Right Reserved`;


