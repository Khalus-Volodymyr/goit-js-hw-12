import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';
import { imagesTemplate } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery__list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.form__container');
const gallery = document.querySelector('.gallery__list');
const loader = document.querySelector('.loader');

form.addEventListener('submit', e => {
  e.preventDefault();

  const search = e.target.elements.search.value.trim();

  if (!search) {
    iziToast.warning({
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  gallery.innerHTML = '';
  loader.classList.remove('hidden');

  getImages(search).then(data => {
    loader.classList.add('hidden');

    if (data.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    gallery.innerHTML = imagesTemplate(data);
    lightbox.refresh();
  });
});
