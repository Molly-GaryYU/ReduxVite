import './component/footer/bottom.css'
import './css-google/googleHome.css'
import './component/searchContainer/search.css'
import './component/Navigation/navigation.css'
import FooterContainer from './component/footer/footerContainer.jsx'
import NavContent from './component/Navigation/navigation.jsx'
import SearchContent from './component/searchContainer/searchContent.jsx'

const App = () => {
    return (
        <div
            className="main-frame"
            id="main-frame" >
            <div className="navigation">
                <NavContent/>
            </div>
            <div className="search">
                <SearchContent/>
            </div>
            <FooterContainer />
        </div>
    )
}
export default App
