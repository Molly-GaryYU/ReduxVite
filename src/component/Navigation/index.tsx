import { useEffect, useState, useRef } from 'react';
import './index/sass/index.scss';
import ninePointImg from '../../img/img-google/ninePoint.png';
import React from 'react';

export default function NavContent() {
  const serverUrl = 'http://localhost:8080/pages/back/goods/getGoods';
  //这一步不知道为什么state默认值不能写二维数组[][]只能写一维数组[]
  const [dataResult, setDataResult] = useState<dataResultType[][] | [][]>([]);
  const ninePoint = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
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
      .then((result: dataResultType[][]) => {
        setDataResult(result);
        console.log('fetch in', dataResult);
      })
      .catch(() => {
        import('./staticData/data.js')
          .then((data) => {
            const moreData: dataResultType[][] =
              data.default as unknown as dataResultType[][];
            //这一步是有意义的，因为两d.ts的impComponent和dataResultType不一致；算是为了熟悉强转
            setDataResult(moreData);
          })
          .catch();
      });
  }, [serverUrl]);
  //遍历请求的App内容
  const dataResultDisplay = () => {
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
  return (
    <div className="navigation">
      <a className="picture" href="/#">
        图片
      </a>
      {/* 这里套两层是因为需要加入悬停时的背景，border-radius: 100px;写在img标签会影响图片形状 */}
      <div ref={ninePoint} className="more">
        <img className=" morePicture" src={ninePointImg} alt="" />
      </div>
      {ninePointClickOrNot ? (
        <div ref={dialog} className="dialogItem">
          <div className="display">
            {dataResultDisplay()}
            <button className="buttonItem">更多Google应用/产品</button>
          </div>
        </div>
      ) : null}
      <a className="login">登录</a>
    </div>
  );
}
