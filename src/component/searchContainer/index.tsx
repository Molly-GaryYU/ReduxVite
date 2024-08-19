import logo from '../../img/img-google/logo.png';
import SearchForm from './component/searchForm';
import SearchButton from './component/searchButton';
import './index/sass/index.scss';
import React from 'react';
const SearchContent = () => {
  return (
    <div className="search">
      <img className="imgItem" src={logo} alt="" />
      <div className="searchArea">
        <SearchForm />
        <SearchButton />
      </div>
    </div>
  );
};
export default SearchContent;
