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

new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionDelay: 250,
  captionsData: "alt",
});
