import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, alt, src, url, onClick }) => (
  <li className={styles.ImageGalleryItem__container}>
    <img
      src={src}
      alt={alt}
      url={url}
      onClick={onClick}
      className={styles.ImageGalleryItem}
    />
  </li>
);
ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
