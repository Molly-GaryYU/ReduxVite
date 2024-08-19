import logo from '../../img/img-google/logo.png';
import SearchForm from './component/searchForm';
import SearchButton from './component/searchButton';
import './search.css';
import React from 'react';
const SearchContent = () => {
  return (
    <div className="search">
      <img className="search--logo__img" src={logo} alt="" />
      <div className="search--area">
        <SearchForm />
        <SearchButton />
      </div>
    </div>
  );
};
export default SearchContent;
