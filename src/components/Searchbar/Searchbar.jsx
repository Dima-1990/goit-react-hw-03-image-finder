import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { SearchForm, SearchInput, SearchButton } from '../Searchbar/Searchbar.styled';

export class SearchBar extends Component {
  state = {
    searchName: '',
    inputValue: '',
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const searchQuery = event.target.elements.searchName.value.trim();
    if (searchQuery === '') {
      Notiflix.Notify.info(
        'The search bar cannot be empty. Please type any criteria in the search bar.'
      );
    }
    this.props.onSubmit(searchQuery);
    event.target.reset();
  };

  render() {
    return (
      <header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton>
            <BsSearch /> 
          </SearchButton>
          <SearchInput
            name="searchName"
            type="text"
            id="search"
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </SearchForm>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
