const closeButton=document.getElementById("offer-close")
const offerBar=document.querySelector(".offer")
closeButton.addEventListener("click",function(){
      offerBar.style.display="none"
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

import { products } from "./products.js";

var Container=document.querySelector(".products-container")

for(var i=0;i<products.length;i++){
      var createDiv=document.createElement("div")
      createDiv.classList.add("product")
      createDiv.innerHTML=`<img src=${products[i].src} alt="hello">
      <h2>${products[i].name}</h2><p>₹${products[i].price}</p>
      <tags style="visibility:;">${products[i].tags}</tags>`
      Container.append(createDiv)
      
}



var filterList=[]
var tags=document.getElementsByName("tags")
console.log(tags);

tags.forEach(tag=>{
      tag.addEventListener("change",(e)=>{
           if(e.target.checked)
            {
            filterList.push(e.target.value)
            reslut()
           }
           else{
            filterList=filterList.filter(item=> item!==e.target.value)
             reslut()   
                 
            
           }
      })
})


function reslut(){




      var productList=document.querySelectorAll(".product")

      for(i=0;i<productList.length;i++)
      {
            var product=productList[i]
            var temp=product.querySelector("tags").innerHTML
            var check=false
            const tempFilterArray=temp.split(",")
      
            filterList.forEach((i)=>{
                  tempFilterArray.forEach((j)=>{
                        if(i==j)
                        {
                        check=true
                        }
                  })
            })
      
           if(!check&&filterList.length>0){
            product.style.display="none"
           }
           else{
            product.style.display="block"
           }
          
           
      }




}
