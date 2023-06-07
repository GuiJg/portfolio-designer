window.addEventListener('scroll', function(){

  const button = document.querySelector('.btn');
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 100) {
    button.style.opacity = '1';
  } else {
    button.style.opacity = '0';
  }
});

const menuButton = document.querySelector('.menu-button');
const headerMenu = document.querySelector('.header-menu');

  menuButton.addEventListener('click', function() {
    headerMenu.classList.toggle('active');
  });


let service = document.getElementById("services")
let project = document.getElementById("projects")
let contact = document.getElementById("contact")

  window.addEventListener("scroll", function(){
    const sectionTop = service.getBoundingClientRect().top;
    const sectionMid = project.getBoundingClientRect().top;
    const sectionBot = contact.getBoundingClientRect().top;
    const windowHeight=window.innerHeight;

    if(sectionTop < windowHeight){
      service.classList.add("active");
    }

    else{
      service.classList.remove("active");
    }
    
    if(sectionMid < windowHeight){
      project.classList.add("active");
    }

    else{
      project.classList.remove("active");
    }

    if(sectionBot < windowHeight){
      contact.classList.add("active");
    }

    else{
      contact.classList.remove("active");
    }
  });