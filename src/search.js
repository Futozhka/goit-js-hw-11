import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api';
const apiKey = '41220614-375ef2d4683beae99c8ec27cb';

//FETCH FUNCTION
export async function search(q, page, perPage) {
  const params = new URLSearchParams({
    key: apiKey,
    q: q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  });
  const response = await axios.get(`${BASE_URL}/?${params}`);
  return response.data;
}