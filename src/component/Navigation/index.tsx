import { useEffect, useState, useRef } from 'react';
import './index/sass/index.scss';
import ninePointImg from '../../img/img-google/ninePoint.png';
import React from 'react';

export default function NavContent() {
  const serverUrl = 'http://localhost:8080/pages/back/goods/getGoods';
  const [dataResult, setDataResult] = useState<dataResultType | []>([]);
  const ninePoint = useRef(null);
  const dialog = useRef(null);
  const [ninePointClickOrNot, setNinePointClickOrNot] =
    useState<boolean>(false);
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
        import('./staticData/data.js')
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
      <nav className="item">
        <a className="picture" href="/#">
          图片
        </a>
        <div className="more" ref={ninePoint}>
          <img className="morePicture" src={ninePointImg} alt="" />
        </div>
        {ninePointClickOrNot ? (
          <div ref={dialog} className="dialogItem">
            <div className="display">
              {dataResultDisplay(dataResult)}
              <button className="buttonItem">更多Google应用/产品</button>
            </div>
          </div>
        ) : null}
        <a className="login">登录</a>
      </nav>
    </div>
  );
}
const dataResultDisplay = (dataResult): JSX.Element => {
  return dataResult.map((itemBlock, index) => {
    let classForType;
    if (index == 0) {
      classForType = 'first';
    } else {
      classForType = 'end';
    }
    return (
      <div className={classForType} key={index}>
        <div className="child">
          {itemBlock.map(({ name, imgComponent, id }) => {
            return (
              <a className="box" href="/#" key={id}>
                <div className="divItem">{imgComponent}</div>
                <span> {name}</span>
              </a>
            );
          })}
        </div>
      </div>
    );
  });
};
