import logo from'../../img/img-google/logo.png'
import SearchForm from './component/searchForm.jsx'
import SearchButton from'./component/searchButton.jsx'
import './search.css'
const SearchContent = () => {

    return (
        <>
            <img className="search--logo__img" src={logo} alt="" />
            <div className="search--area">
                  <SearchForm/>
                  <SearchButton/>
            </div>
        </>
    )
}
export default SearchContent




