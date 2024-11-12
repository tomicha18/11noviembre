const galeria = document.querySelector(".galeria");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

let currentIndex = 0;
const totalImages = document.querySelectorAll(".galeria a").length;

//hace mover el carrousel de a una imagen
//el index se tiene q multiplicar x100 para la totalidad de la imagen
//si se le pone otro numero la imagen no se desplaza en su totalidad
function updateCarousel() {
  galeria.style.transform = `translateX(-${currentIndex * 100}%)`;
}
//si flecha left clickeada
leftButton.addEventListener("click", () => {
    //si es una imagen que no es la primera(la 1 es la q tiene el indice 0)
  if (currentIndex > 0) {
    //al clickear en la flecha izquierda se resta para pasar a la imagen anterior
    currentIndex -= 1;
  } else {
    //si no entonces es la primera imagen, y se va a la ultima
    currentIndex = totalImages - 1;
  }
  updateCarousel();
});
//si click en flecha derecha
rightButton.addEventListener("click", () => {
    //las imagenes son 3 asi que si index es < 2 alterna la imagen
  if (currentIndex < totalImages - 1) {
    currentIndex += 1;
  } else {
    //si supera el 2 (ya está en la ultima imagen)
    //por ende vuelve a la primera declarando index 0(primera imagen)
    currentIndex = 0;
  }
  updateCarousel();
});

