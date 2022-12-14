import PropTypes from 'prop-types';
import { GalleryItem, ImageGalleryImage }from './ImageGalleryItemStyled';

export const ImageGalleryItem = ({
  id,
  smallImage,
  searchValue,
  openModal,
}) => (
  <GalleryItem>
    <ImageGalleryImage
      src={smallImage}
      alt={searchValue}
      data-img-id={id}
      onClick={() => openModal(id)}
    />
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImage: PropTypes.string.isRequired,
  bigImage: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};