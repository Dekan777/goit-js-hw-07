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






// 1.Создание и рендер разметки по массиву 
// данных galleryItems и предоставленному 
// шаблону элемента галереи.  (+)

// 2.Реализация делегирования на ul.gallery 
// и получение url большого изображения. (-)

// 3. Подключение скрипта и стилей библиотеки 
// модального окна basicLightbox. Используй 
// CDN сервис jsdelivr и добавь в проект ссылки
//  на минифицированные (.min) файлы
//   библиотеки.   (-)

// 4.Открытие модального окна по клику на 
// элементе галереи. Для этого ознакомься
//  с документацией и примерами.   (-)

// 5. Замена значения атрибута src элемента
//  <img> в модальном окне перед открытием.
//   Используй готовую разметку модального 
//   окна с изображением из примеров 
//   библиотеки basicLightbox.  (-) 

// 6.Обрати внимание на то, что изображение 
// обернуто в ссылку, а значит при клике по
//  умолчанию пользователь будет перенаправлен
//   на другую страницу. Запрети 
//   это поведение по умолчанию.  (-)

// 7.Добавь закрытие модального окна по
//  нажатию клавиши Escape. Сделай так, 
//  чтобы прослушивание клавиатуры было 
//  только пока открыто модальное окно. У 
//  библиотеки basicLightbox есть метод
//   для программного закрытия модального
//    окна.    (-)