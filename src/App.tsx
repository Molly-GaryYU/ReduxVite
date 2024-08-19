import './component/footer/bottom.css';
import './css-google/googleHome.css';
import './component/searchContainer/search.css';
import './component/Navigation/navigation.css';
import FooterContainer from './component/footer/footerContainer.jsx';
import NavContent from './component/Navigation/navigation';
import SearchContent from './component/searchContainer/searchContent.jsx';
import React from 'react';

const App = () => {
  return (
    <div className="main-frame" id="main-frame">
      <NavContent />
      <SearchContent />
      <FooterContainer />
    </div>
  );
};
export default App;
