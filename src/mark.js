import SimpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import { els } from './index.js';

//MARKUP FUNCTION
export function createImageCard(images) {
  const card = images.map(image => {
    return `<div class="photo-card"><a class="gallery_link" href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a><div class="info"><p class="info-item"><b>Likes: ${image.likes}</b></p><p class="info-item"><b>Views: ${image.views}</b></p><p class="info-item"><b>Comments: ${image.comments}</b></p><p class="info-item"><b>Downloads: ${image.downloads}</b></p></div></div>`;
  });

  els.gallery.insertAdjacentHTML('beforeend', card.join(''));

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });
}