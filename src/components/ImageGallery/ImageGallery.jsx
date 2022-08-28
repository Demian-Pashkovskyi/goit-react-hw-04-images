import { ImageGallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imagesList, searchValue, openModal }) => (
  <ImageGallery>
    {imagesList.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        smallImage={webformatURL}
        bigImage={largeImageURL}
        searchValue={searchValue}
        openModal={openModal}
      />
    ))}
  </ImageGallery>
);

ImageGallery.propTypes = {
  imagesList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchValue: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};