'use strict';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryElements = galleryItems
  .map(item => {
    return `<li class="gallery__item">
     <a class="gallery__link" href="${item.original}">
       <img
        class="gallery__image"
         src="${item.preview}"
         data-source="${item.original}"
         alt="${item.description}"
       />
     </a>
   </li>`;
  })
  .join('');

galleryList.insertAdjacentHTML('beforeend', galleryElements);

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

document.addEventListener('keydown', escapePress);
function escapePress(eventKey) {
  if (eventKey.code === 'Escape') {
    openedImage.close();
    document.removeEventListener('keydown', escapePress);
  }
}
