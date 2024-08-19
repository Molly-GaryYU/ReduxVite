/* eslint-disable react/prop-types */
import searchImg from '../../../img/img-google/search.png';
import deleteImg from '../../../img/img-google/delete.png';
import maiKeImg from '../../../img/img-google/maike.png';
import cameraImg from '../../../img/img-google/picture.png';
import hoverMaiKeImg from '../../../img/img-google/hoverMaike.png';
import hoverCameraImg from '../../../img/img-google/hoverPicture.png';
import hoverSearchImg from '../../../img/img-google/hoverSearch.png';
import { useDispatch, useSelector } from 'react-redux';
import deleteImg2 from '../../../img/img-google/delete2.png';
import { useState } from 'react';
import React from 'react';
import { TypedUseSelectorHook } from 'react-redux';
import { initialStateType } from '../../../store/index';
// 输入框
const SearchAreaFormTop: React.FC = () => {
  const useTypedSelector: TypedUseSelectorHook<initialStateType> = useSelector;
  const hoverInput: Boolean = useTypedSelector((state) => state.hoverInput);
  const [inputValueIsNull, setInputValueIsNull] = useState(false);
  const dispatch = useDispatch();
  const handelInputValue = (event) => {
    if (event.target.value) {
      setInputValueIsNull(true);
      dispatch({ type: 'CHANGE_INPUT_OR_NOT_TO_TRUE' });
    } else {
      dispatch({ type: 'CHANGE_INPUT_OR_NOT_TO_FALSE' });
      setInputValueIsNull(false);
    }
  };
  return (
    <div className="top">
      <div className="divItem">
        <div className="left">
          <img
            className={hoverInput ? 'imgItemHover' : 'imgItem'}
            src={hoverInput ? hoverSearchImg : searchImg}
            alt=""
          />
          <input
            className={hoverInput ? 'inputHover inputItem ' : 'inputItem'}
            onFocus={() => {
              dispatch({ type: 'CHANGE_FOCUS_RIGHT_NOW_TO_TRUE' });
              dispatch({ type: 'CHANGE_HOVER_INPUT_TO_TRUE' });
            }}
            onChange={handelInputValue}
          />
        </div>
        <div className="right">
          <img
            className={
              inputValueIsNull
                ? hoverInput
                  ? 'hiddenImg'
                  : 'hidden'
                : 'hidden hide'
            }
            src={hoverInput ? deleteImg : deleteImg2}
            alt=""
          />
          <span
            className={
              inputValueIsNull ? (hoverInput ? 'lineHover' : 'line') : 'hide'
            }
          ></span>
          <img
            className={hoverInput ? 'mikeHover' : 'mike'}
            src={hoverInput ? hoverMaiKeImg : maiKeImg}
            alt=""
          />
          <img
            className={hoverInput ? 'cameraHover' : 'camera'}
            src={hoverInput ? hoverCameraImg : cameraImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default SearchAreaFormTop;
