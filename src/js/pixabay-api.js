import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '48882544-91bb6160508b612126ca5843a';
const BASE_URL = 'https://pixabay.com/api/';

export function getImages(search) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: search,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later!',
        position: 'topRight',
      });
      return [];
    });
}

// const form = document.querySelector('.form__container');
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const search = e.target.elements.search.value;
//   console.log(search);
//   const request = axios.create({
//     baseURL: 'https://pixabay.com/api/',
//     params: {
//       key: '48882544-91bb6160508b612126ca5843a',
//       q: search,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//     },
//   });
//   const response = request
//     .get()
//     .then(function (response) {
//       if (response.data.hits.length === 0) {
//         iziToast.error({
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//           position: 'topRight',
//         });
//       }
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });
