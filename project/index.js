


let position = 0;
let currentTimeout;
let lastSwitch = 0;
showSlides();

function showSlides() {

  setSlide(position);
}


function setSlide(index) {

  if(position>=6){
    index = 0;
  }

  var slide = document.getElementById('slide');
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('activeDot');
  }

  dots[index].classList.add("activeDot");
  slide.style.backgroundImage = "url('./images/slides/slide"+(index+1)+".jpg')";

  position = index;
  
  //Zeitpunkt des letzten switchen (s)
  lastSwitch = new Date().getTime()/1000;


  //Timer löschen falls noch nicht abgelaufen
  if(currentTimeout)
    clearTimeout(currentTimeout);

  currentTimeout = setTimeout(setSlide, 5000, (position +1) % 6);  
}


function arrowNavigation(direction){

   //Wenn versucht wird zu switchen, bevor eine halbe sekunde nach dem letzten switch vergangen ist -> return
  if(new Date().getTime()/1000 - lastSwitch < 0.5) return;

  if(direction == "left"){

    position = position-1<0 ? 5 : position-1;
    setSlide(position);

  }else{

    position = position-1>5 ? 0 : position+1;
    setSlide(position);
  }


}







