import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
    className: 'active',
  };

  formSubmited = {
    state: false,
    valueSubmited: '',
  };

  componentDidUpdate() {
    console.log('Btn componentDidUpdate ?');
    const { valueSubmited } = this.formSubmited;
    if (
      this.state.className === 'active' &&
      this.state.searchQuery === valueSubmited
    ) {
      this.setState(prevState => {
        return { ...prevState, className: 'inactive' };
      });
    }
  }

  handleChange = e => {
    this.setState(prevState => {
      return { ...prevState, className: 'active' };
    });
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = e => {
    console.log('submit btn pressed');
    e.preventDefault();
    const normalizedSearchQuery = this.state.searchQuery.trim();
    console.log('normalizedSearchQuery', normalizedSearchQuery);
    if (normalizedSearchQuery.length !== 0) {
      this.props.onQuerySubmit(this.state.searchQuery.trim());
    }
    this.setState({ className: 'inactive' });
    this.formSubmited.valueSubmited = this.state.searchQuery;
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className={styles.SearchForm__button + ' ' + this.state.className}
          >
            <span>Search</span>
          </button>

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
