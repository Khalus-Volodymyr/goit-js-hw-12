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
const loadMoreBtn = document.querySelector('.load-more');

let searchQuery = '';
let page = 1;
const perPage = 40;
let totalHits = 0;

form.addEventListener('submit', async e => {
  e.preventDefault();

  searchQuery = e.target.elements.search.value.trim();
  if (!searchQuery) {
    iziToast.warning({
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  page = 1;
  gallery.innerHTML = '';
  loadMoreBtn.classList.add('hidden');
  loader.classList.remove('hidden');

  const data = await getImages(searchQuery, page);
  loader.classList.add('hidden');

  if (data.hits.length === 0) {
    iziToast.error({
      message: 'Sorry, there are no images matching your search query!',
      position: 'topRight',
    });
    return;
  }

  totalHits = data.totalHits;
  gallery.innerHTML = imagesTemplate(data.hits);
  lightbox.refresh();

  if (totalHits > perPage) {
    loadMoreBtn.classList.remove('hidden');
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  loadMoreBtn.classList.add('hidden');
  loader.classList.remove('hidden');

  const data = await getImages(searchQuery, page);
  loader.classList.add('hidden');

  gallery.insertAdjacentHTML('beforeend', imagesTemplate(data.hits));
  lightbox.refresh();

  if (page * perPage >= totalHits) {
    loadMoreBtn.classList.add('hidden');
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  } else {
    loadMoreBtn.classList.remove('hidden');
  }

  smoothScroll();
});

function smoothScroll() {
  const cardHeight = document
    .querySelector('.gallery__item')
    .getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import { getImages } from './js/pixabay-api';
// import { imagesTemplate } from './js/render-functions';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const lightbox = new SimpleLightbox('.gallery__list a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// const form = document.querySelector('.form__container');
// const gallery = document.querySelector('.gallery__list');
// const loader = document.querySelector('.loader');

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   const search = e.target.elements.search.value.trim();

//   if (!search) {
//     iziToast.warning({
//       message: 'Please enter a search term!',
//       position: 'topRight',
//     });
//     return;
//   }

//   gallery.innerHTML = '';
//   loader.classList.remove('hidden');

//   getImages(search).then(data => {
//     loader.classList.add('hidden');

//     if (data.length === 0) {
//       iziToast.error({
//         message:
//           'Sorry, there are no images matching your search query. Please try again!',
//         position: 'topRight',
//       });
//       return;
//     }

//     gallery.innerHTML = imagesTemplate(data);
//     lightbox.refresh();
//   });
// });
