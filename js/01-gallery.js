import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => {
  return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img 
                        class="gallery__image" 
                        src="${preview}" 
                        data-source="${original}"
                        alt="${description}" 
                    />
                </a>
            </li>`;
};

const galleryCreate = galleryItems.map(createGalleryItem).join("");
gallery.insertAdjacentHTML("beforeend", galleryCreate);

document.addEventListener("click", (event) => {
  //запрет
  event.preventDefault();

  const selectedElement = event.target.closest(".gallery__link");

  if (selectedElement) {
    // Оброботка элемента
    // console.log('елемент:', selectedElement);
    // console.log(event.target);
    // const url = selectedElement.href;
    // console.log(url);

    const instance = basicLightbox.create(`
        <img src="${selectedElement.href}" width="800" height="600">
         `);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    });

    instance.show();
  }
});
