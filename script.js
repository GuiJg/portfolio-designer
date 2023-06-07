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
let text = document.getElementById("text")
let title = document.getElementById("title")

  window.addEventListener("scroll", function(){
    const sectionTop = service.getBoundingClientRect().top;
    const sectionMid = project.getBoundingClientRect().top;
    const sectionBot = contact.getBoundingClientRect().top;
    const sectionDiv = text.getBoundingClientRect().top;
    const sectionTitle = text.getBoundingClientRect().top;
    const windowHeight=window.innerHeight;

    if(sectionTop < windowHeight){
      service.classList.add("ativa");
    }

    else{
      service.classList.remove("ativa");
    }
    
    if(sectionMid < windowHeight){
      project.classList.add("ativa");
    }

    else{
      project.classList.remove("ativa");
    }

    if(sectionBot < windowHeight){
      contact.classList.add("ativa");
    }

    else{
      contact.classList.remove("ativa");
    }

    if(sectionDiv < windowHeight){
      text.classList.add("ativa");
    }

    else{
      text.classList.remove("ativa");
    }

    if(sectionTitle < windowHeight){
      title.classList.add("ativa");
    }

    else{
      title.classList.remove("ativa");
    }
  });