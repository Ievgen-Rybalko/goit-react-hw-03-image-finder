//import axios from 'axios';

//axios.defaults.baseURL = 'https://pixabay.com/api/';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = 'key=21933433-c49aed7af732e0bc1136ba9bb';
const IMG_TYPE = 'image_type=photo&orientation=horizontal';

function fetchImages(searchQuery = '', currentPage = 1) {
  //   console.log(
  //     'Inside API file: searchQuery',
  //     searchQuery,
  //     'currentPage',
  //     currentPage,
  //   );
  return fetch(
    `${BASE_URL}?q=${searchQuery}&page=${currentPage}&${KEY}&${IMG_TYPE}&per_page=12`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Bad request!!! No response from server`));
  });
}

const api = { fetchImages };
export default api;

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
