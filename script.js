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
const dynamicText = document.querySelector(".typewriter");
const words = ["UI/UX Designer","Graphic Designer"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();