import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
  componentDidUpdate() {
    //console.log('gallerey was Updated:', document.documentElement.scrollHeight);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    return <ul className={styles.ImageGallery}>{this.props.children}</ul>;
  }
}

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageGallery;
