var leftBtn=document.querySelector(".left-button")
var rightBtn=document.querySelector(".right-button")
var sliderMargin=0
var sliderImage=document.querySelector(".slider-image-container")

rightBtn.addEventListener("click",function(){
    sliderMargin=sliderMargin+100
    if(sliderMargin>200)
        {
            sliderMargin=0
            sliderImage.style.marginLeft=0;
        }
        else{
            sliderImage.style.marginLeft="-"+sliderMargin+"vw"
        }
})
leftBtn.addEventListener("click",function(){
    if(sliderMargin==0)
        {
            sliderMargin=200
            sliderImage.style.marginLeft="-"+sliderMargin+"vw"
        }
        else{
            sliderMargin=sliderMargin-100
            sliderImage.style.marginLeft="-"+sliderMargin+"vw"
        }
})

// offer close
var close=document.getElementById("offer-close")
var offer=document.querySelector(".offer")
close.addEventListener("click",function(){
 offer.style.display="none"
})

//side navbar
const menu=document.getElementById("side-navbar-activate")
const sideNav=document.querySelector(".sidenav")
const closeMark=sideNav.querySelector("i")
menu.addEventListener("click",()=>{
sideNav.classList.add("show")
})
closeMark.addEventListener("click",()=>{
sideNav.classList.remove("show")
})


// Red and Black heart

var blackHeart=document.querySelectorAll(".black-heart")

blackHeart.forEach(btn=>{
    btn.addEventListener("click",function(e){
        if(e.target.src.indexOf("blackheart")>0)
            {
            console.log("jkjk");
                e.target.src="./Images/icons/redheart.png"
            }
            else{
                e.target.src="./Images/icons/blackheart.png"
                console.log("abcd")
    
            }
    })
})

// scroll animate
window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})
