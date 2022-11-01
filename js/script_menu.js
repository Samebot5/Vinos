const menuIcono = document.getElementById("toggle-menu");
const menuPrincipal = document.getElementById("main-menu");

menuIcono.addEventListener("click", ()=>{
    menuPrincipal.classList.toggle("main-menu-show");
})
