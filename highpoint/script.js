let threeLine = document.getElementById("ThreeLine");
let navLinks = document.getElementById("NavLinks");
let nav = document.getElementById("Navigation");


threeLine.addEventListener("click", ()=> {
    navLinks.classList.toggle("navLinksActive");
    nav.classList.toggle("navigationActive");
    
});

