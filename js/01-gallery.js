import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGaleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGaleryItemsMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `
    )
    .join("");
}

const instance = basicLightbox.create(
  ` 
<img class="open-img" src="" width="800" height="600">
 `,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEcsKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEcsKeyPress);
    },
  }
);

function onGalleryContainerClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  instance.show();
  const changeImg = document.querySelector(".open-img");
  changeImg.src = event.target.dataset.source;

  console.log(event.target.dataset.source);
}

function onEcsKeyPress(event) {
  if (event.code === "Escape") {
    instance.close();
    return instance;
  }
  // console.log(event.code);
}
console.log();
console.log(galleryItems);
