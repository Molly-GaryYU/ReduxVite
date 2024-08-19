import { useEffect, useState, useRef } from 'react';
import './navigation.css';
import ninePointImg from '../../img/img-google/ninePoint.png';
import React from 'react';

export default function NavContent() {
  const serverUrl = 'http://localhost:8080/pages/back/goods/getGoods';
  const [dataResult, setDataResult] = useState<dataResultType | []>([]);
  const ninePoint = useRef(null);
  const dialog = useRef(null);
  const [ninePointClickOrNot, setNinePointClickOrNot] = useState(false);
  interface dataResultType {
    name: String;
    impComponent: JSX.Element;
    id: number;
  }
  //请求数据
  useEffect(() => {
    const handleNinePointClick = (event) => {
      if (ninePoint.current.contains(event.target)) {
        setNinePointClickOrNot((ninePointClickOrNot) => !ninePointClickOrNot);
      } else if (dialog.current.contains(event.target)) {
        console.log('dialog内点击,不关闭');
      } else {
        console.log('点击与抽屉无关，关闭');
        setNinePointClickOrNot(false);
      }
    };
    document.addEventListener('click', handleNinePointClick);
    return () => {
      document.removeEventListener('click', handleNinePointClick);
    };
  }, []);
  //文档流监听关闭dialog
  useEffect(() => {
    fetch('http://localhost:8080/pages/back/goods/getGoods')
      .then((response) => response.json())
      .then((result: dataResultType) => {
        setDataResult(result);
        console.log('fetch in', dataResult);
      })
      .catch(() => {
        import('./staticData/data.jsx')
          .then((data) => {
            const moreData: dataResultType =
              data.default as unknown as dataResultType;
            setDataResult(moreData);
          })
          .catch();
        // then()获取的数据无法在then外请求
      });
  }, [serverUrl]);

  return (
    <div className="navigation">
      <nav className="navigation__nav">
        <a className="navigation__nav--img" href="/#">
          图片
        </a>
        <div className="navigation__nav--more " id="nine-point" ref={ninePoint}>
          <img
            className="navigation__nav--more__img"
            src={ninePointImg}
            alt=""
          />
        </div>
        {ninePointClickOrNot ? (
          <div
            ref={dialog}
            id="navigation__nav__dialog"
            className="navigation__nav__dialog"
          >
            <div
              id="navigation__nav__dialog--display"
              className="navigation__nav__dialog--display"
            >
              {dataResultDisplay(dataResult)}
              <button className="navigation__nav__dialog__button">
                更多Google应用/产品
              </button>
            </div>
          </div>
        ) : null}

        <a className="navigation__nav--login__a navigation__nav--login">登录</a>
      </nav>
    </div>
  );
}
const dataResultDisplay = (dataResult) => {
  return dataResult.map((itemBlock, index) => {
    let classForType;
    if (index == 0) {
      classForType = 'navigation__nav__dialog--display--type--first';
    } else {
      classForType = 'navigation__nav__dialog--display--type--end';
    }
    return (
      <div className={classForType} key={index}>
        <div className="navigation__nav__dialog--display--type--child">
          {itemBlock.map(({ name, imgComponent, id }) => {
            return (
              <a
                className="navigation__nav__dialog--display--type--box"
                href="/#"
                key={id}
              >
                <div className="navigation__nav__dialog--display--type--box__div">
                  {imgComponent}
                </div>
                <span> {name}</span>
              </a>
            );
          })}
        </div>
      </div>
    );
  });
};
