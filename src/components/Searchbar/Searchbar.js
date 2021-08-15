import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
    btnDisabled: true,
  };

  // formSubmited = {
  //   valueSubmited: '',
  // };

  // componentDidUpdate() {
  //   console.log('Btn componentDidUpdate ?');
  //   const { valueSubmited } = this.formSubmited;
  //   if (
  //     this.state.className === 'active' &&
  //     this.state.searchQuery === valueSubmited
  //   ) {
  //     this.setState(prevState => {
  //       return { ...prevState, className: 'inactive' };
  //     });
  //   }
  // }

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value, btnDisabled: false });
  };

  handleSubmit = e => {
    //console.log('submit btn pressed');
    e.preventDefault();
    const normalizedSearchQuery = this.state.searchQuery.trim();

    if (normalizedSearchQuery.length !== 0) {
      this.props.onQuerySubmit(this.state.searchQuery.trim());
    }
    this.setState(prevState => {
      return { ...prevState, btnDisabled: true };
    });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          {this.state.btnDisabled ? (
            <button
              type="submit"
              disabled
              className={styles.SearchForm__button_disabled}
            >
              <span>Search</span>
            </button>
          ) : (
            <button type="submit" className={styles.SearchForm__button}>
              <span>Search</span>
            </button>
          )}

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.serchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onQuerySubmit: PropTypes.func.isRequired,
};

export default Searchbar;
