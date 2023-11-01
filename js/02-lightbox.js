import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => {
  return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        alt="${description}"
                    />
                </a>
            </li>`;
};

const galleryCreate = galleryItems.map(createGalleryItem).join("");
gallery.insertAdjacentHTML("beforeend", galleryCreate);

gallery.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery__image")) {
 event.preventDefault();
    // const selectedElement = event.target.closest(".gallery__image");
    new SimpleLightbox(".gallery a", {
      captionPosition: "bottom",
      captionDelay: 250,
      captionsData: "alt",
    });
 return;

  }

});