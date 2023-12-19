
let images = document.getElementsByTagName('img');

    for(let i = 0; i < images.length; i++){
        images[i].addEventListener('mouseover', handleFocus);
    }

function handleFocus(position){

    console.log(position.target.id);

    for(let i = 0; i < images.length; i++){
        images[i].classList.remove("focused");
    }

    position.target.classList.add("focused");
}

