import React from 'react';
import './index/sass/bottom.scss';

export default function footerContainer() {
  return (
    <footer className="bottom">
      <nav className="left">
        <a className="textStyle">关于 Google</a>
        <a className="textStyle">广告</a>
        <a className="textStyle">商务</a>
        <a className="textStyle">Google 搜索运动方式</a>
      </nav>
      <nav className="right">
        <a className="textStyle">隐私权</a>
        <a className="textStyle">条款</a>
        <a className="textStyle">设置</a>
      </nav>
    </footer>
  );
}
