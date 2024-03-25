export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43061376-077d2ae6c0f35aaf7ffe657eb';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
