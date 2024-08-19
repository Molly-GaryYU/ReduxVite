import React from 'react';
import './bottom.css';

export default function footerContainer() {
  return (
    <footer className="bottom">
      <nav className="bottom--left">
        <a className="bottom__a">About Google</a>
        <a className="bottom__a">广告</a>
        <a className="bottom__a">商务</a>
        <a className="bottom__a">Google 搜索运动方式</a>
      </nav>
      <nav className="bottom--right">
        <a className="bottom__a">隐私权</a>
        <a className="bottom__a">条款</a>
        <a className="bottom__a">设置</a>
      </nav>
    </footer>
  );
}
