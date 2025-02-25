const menu = document.querySelector('.fa-bars');
const linkDiv = document.querySelector('.links-div');

menu.addEventListener('click',() =>{
    linkDiv.classList.toggle('active');

    if (linkDiv.classList.contains('active')){
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-times');
    }else{
        menu.classList.add('fa-bars');
        menu.classList.remove('fa-times');
    }
})

// slaider interactivo
const totalImages = document.querySelectorAll('.gallery-item');
const galleryContainer = document.querySelector('.gallery-container');

let currentIndex = 0; // mantiene un registro de la imagen actual que se esta mostrando en el slider

// funcion para actualizar la posición del contenedor
function updateGalleryPosition(){
    galleryContainer.style.transform = `translateX(-${currentIndex * 25}%)`;
   }
   
document.querySelector('.prev-button').addEventListener('click',()=>{
   currentIndex--;

   if(currentIndex<0){
    currentIndex = totalImages.length -1 // regresa al final del carrusel
   }
   updateGalleryPosition()
});


document.querySelector('.next-button').addEventListener('click',()=>{
    currentIndex++;

   if(currentIndex >= totalImages.length){
    currentIndex = 0; // regresa al principio del carrusel
   }

   updateGalleryPosition()
})


