import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '48882544-91bb6160508b612126ca5843a';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 40;

export async function getImages(search, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: search,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: PER_PAGE,
      },
    });

    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later!',
      position: 'topRight',
    });
    return { hits: [], totalHits: 0 };
  }
}

// import axios from 'axios';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const API_KEY = '48882544-91bb6160508b612126ca5843a';
// const BASE_URL = 'https://pixabay.com/api/';

// export async function getImages(search) {
//   return axios
//     .get(BASE_URL, {
//       params: {
//         key: API_KEY,
//         q: search,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//       },
//     })
//     .then(response => response.data.hits)
//     .catch(error => {
//       console.log(error);
//       iziToast.error({
//         title: 'Error',
//         message: 'Something went wrong. Please try again later!',
//         position: 'topRight',
//       });
//       return [];
//     });
// }
