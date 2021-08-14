import { Component } from 'react';
import PropTypes from 'prop-types';
//import styles from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <button type="button" className="button" onClick={this.props.onGetMore}>
        Load more
      </button>
    );
  }
}
Button.propTypes = {
  onGetMore: PropTypes.func.isRequired,
};

export default Button;
