// Vars
const header = document.querySelector('#header-menu');
const menu = document.querySelector('.menu');
const btnmenu = document.querySelector('.btn-menu');
const closemenu = document.querySelector('.close-menu');
const menuli = document.querySelectorAll('.menu .list-container li a');
const gotop = document.querySelector('.go-top');

/**** Event listener ****/
EventListener();
function EventListener(){

    // Open menu
    btnmenu.addEventListener('click', Openmenu);

    // Close menu
    closemenu.addEventListener('click', Closemenu);

    // Active link
    Activelink();

}


/**** Function ****/
// Open menu
function Openmenu() {
   menu.style.right = '0';
   menu.style.transition = '400ms';
}

// Close menu
function Closemenu(){
    menu.style.right = '-150%';
    menu.style.transition = '400ms';
}

// Active link
function Activelink(){
  
  menuli.forEach(link => {
     link.addEventListener('click', (event) => {

      menuli.forEach(element => {
        element.classList.remove('active');
      });

      // Add Active
      event.target.classList.add('active');
         
     });

  });

}


// Windows scroll
let prevScroll = window.pageYOffset;

window.onscroll = () => {
   
  let currentScroll = window.pageYOffset;
  
  // Hide & Show menu
  if(prevScroll > currentScroll){
    header.style.top = '0px';
    header.style.transition = '0.5s';
  }else{
    header.style.top = '-90px';
    header.style.transition = '0.5s';  
  }

  prevScroll = currentScroll;

  // Go top
  if(prevScroll > 600){
     gotop.style.right = "0px";
     gotop.style.transition = "300ms";
  }else{
     gotop.style.right = "-100%";
     gotop.style.transition = "300ms";
  }

}

