import './component/footer/bottom.css';
import '../googleHome.css';
import './component/searchContainer/search.css';
import './component/Navigation/navigation.css';
import FooterContainer from './component/footer/footerContainer';
import NavContent from './component/Navigation/navigation';
import SearchContent from './component/searchContainer/searchContent';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="main-frame" id="main-frame">
      <NavContent />
      <SearchContent />
      <FooterContainer />
    </div>
  );
};
export default App;
