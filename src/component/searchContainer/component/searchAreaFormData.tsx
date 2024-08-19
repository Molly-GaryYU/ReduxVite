/* eslint-disable react/jsx-key */
import { ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import focusSearchImg from '../../../img/img-google/hoverSearch.png';
import hoverSearchImg from '../../..//img/img-google/searchAreaImgHover.png';
import { TypedUseSelectorHook } from 'react-redux';
import { initialStateType } from '../../../store';
import React from 'react';
import { DataItem } from '../data.d';
// 输入框检索内容
const SearchAreaFormData: React.FC = () => {
  const useTypedSelector: TypedUseSelectorHook<initialStateType> = useSelector;
  const inputOrNot: Boolean = useTypedSelector((state) => state.inputOrNot);
  const [searchData, setSearchData] = useState<DataItem[]>([]);
  //请求静态文件数据
  useEffect(() => {
    (async () => {
      const module = await import('../staticData/data.jsx');
      const data = module.default;
      setSearchData(data);
    })();
    return;
  }, []);
  // 更新 imgComponent 的函数
  const updateImgSrc = (index: number, imgSrc: string) => {
    const updatedSearchData = [...searchData];
    if (!updatedSearchData[index].img) {
      console.log('没图片,替换searchImg');
      updatedSearchData[index] = {
        ...updatedSearchData[index],
        imgComponent: (
          <img
            src={imgSrc}
            className={
              updatedSearchData[index].img
                ? 'search--area__form--data--row__img change'
                : 'search--area__form--data--row__nothing change'
            }
            alt=""
          />
        ),
      };
    }
    setSearchData(updatedSearchData);
  };

  return (
    <>
      <div
        id="search--area--line"
        className={
          inputOrNot ? 'search--area--line' : 'search--area--line display--none'
        }
      ></div>
      <div
        className={
          inputOrNot
            ? 'search--area__form--data '
            : 'search--area__form--data display--none'
        }
      >
        {inputOrNot
          ? searchData.map((item, index) => {
              let containerClass =
                'search--area__form--data--row--margin change search--area__form--data--row';
              let nameSpan;
              let introduceSpan;
              if (index === 0) {
                containerClass =
                  'search--area__form--data--row--first--row change search--area__form--data--row';
              }
              // 没图片有作者
              if (item.introduceOrNot) {
                if (item.img) {
                  nameSpan = 'change';
                  introduceSpan =
                    'search--area__form--data--row__author change';
                } else {
                  nameSpan =
                    'search--area__form--data--row__span__none-img change';
                  introduceSpan =
                    'search--area__form--data--row__span__none-img search--area__form--data--row__author change';
                }
                return (
                  <div
                    className={containerClass}
                    data-key={index}
                    key={index}
                    onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
                      const target = event.target as HTMLElement;
                      //   const index = parseInt(
                      //     target.getAttribute('data-key'),
                      //     10
                      //   );
                      updateImgSrc(index, hoverSearchImg);
                      updateImgSrc(index, hoverSearchImg);
                    }}
                    onMouseLeave={() => {
                      updateImgSrc(index, focusSearchImg);
                    }}
                  >
                    {item.imgComponent}
                    <div className="search--area__form--data--row__div change ">
                      <span className={nameSpan}>{item.name}</span>
                      <span className={introduceSpan}>{item.introduce}</span>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  className={containerClass}
                  key={index}
                  data-key={index}
                  onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
                    const target = event.target as HTMLElement;
                    // const index = parseInt(target.getAttribute('data-key'), 10);
                    updateImgSrc(index, hoverSearchImg);
                  }}
                  onMouseLeave={() => {
                    updateImgSrc(index, focusSearchImg);
                  }}
                >
                  {item.imgComponent}
                  <div className="search--area__form--data--row__div change">
                    <span className="search--area__form--data--row__span">
                      {item.name}
                    </span>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default SearchAreaFormData;
