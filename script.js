const menu= document.querySelector("#menuBtn");
const navLinks= document.querySelector(".navLinks");
menu.onclick=()=>{
 
  navLinks.classList.toggle("menu_active");
  if(menu.classList.contains("bi-x-circle"))
  {
    menu.classList.replace("bi-x-circle","bi-list" );
  }
  else{
    menu.classList.replace("bi-list", "bi-x-circle" );
  }

}
window.onscroll = () => {
  navLinks.classList.remove('menu_active');
}