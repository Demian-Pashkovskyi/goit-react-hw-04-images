export const PER_PAGE = 12;

export async function getImages(page, query) {
  const API_KEY = '28320130-19a63cf24e9bf5fe751a1157e';
  const BASE_URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
  const response = await fetch(BASE_URL);
  return response.ok
    ? response.json()
    : Promise.reject(new Error('Something went wrong, please try again'));
}