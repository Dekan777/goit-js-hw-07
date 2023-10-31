import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => {
  return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img 
                        class="gallery__image" 
                        src="${preview}" 
                        alt="${description}" 
                        title="${description}"
                    />
                </a>
            </li>`;
};



const galleryCreate = galleryItems.map(createGalleryItem).join("");
gallery.insertAdjacentHTML("beforeend", galleryCreate);

document.addEventListener("click", (event) => {
    const selectedElement = event.target.closest(".gallery__image");
  
   
    if (selectedElement) {
      event.preventDefault();

     const lightbox = new SimpleLightbox('.gallery a', { 
        captionPosition: 'bottom',
        captionDelay: 250,
       
    });
    
    }
  
  });





//   new SimpleLightbox('.gallery__image a', { /* options */ });

//   $('.gallery__image a').simpleLightbox({ /* options */ });