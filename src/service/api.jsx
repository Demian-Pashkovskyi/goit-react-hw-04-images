import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (query, currentPage = 1) => {
  const result = await axios({
    params: {
      key: '28320130-19a63cf24e9bf5fe751a1157e',
      image_type: 'photo',
      orientation: 'horizontal',
      page: currentPage,
      per_page: 12,
      q: query,
    },
  });
  const requiredResult = result.data.hits.map(
    ({ id, webformatURL, largeImageURL }) => ({
      id,
      webformatURL,
      largeImageURL,
    })
  );

  return requiredResult;
};