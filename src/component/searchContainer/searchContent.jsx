import logo from '../../img/img-google/logo.png';
import SearchForm from './component/searchForm.jsx';
import SearchButton from './component/searchButton.jsx';
import './search.css';
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
