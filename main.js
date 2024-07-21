let sideBar = document.querySelector(".side-bar");
let menu = document.querySelector(".menu");
let menuBtn = document.querySelector("#menuBtn");


sideBar.style.right = "-250px";
menu.onclick = function(){
  if(sideBar.style.right == "-250px"){
    sideBar.style.right = "0";
    menuBtn.src = "images/close.png";
  } 
  else{
    sideBar.style.right = "-250px";
    menuBtn.src = "images/menu.png";
  }
}