const menuButton=document.getElementById("side-navbar-activate")
const sidenav=document.querySelector(".sidenav")
const closeBtn=document.getElementById("offer-close")

menuButton.addEventListener("click",()=>sidenav.classList.add("show"))
closeBtn.addEventListener("click",()=>sidenav.classList.remove("show"))
