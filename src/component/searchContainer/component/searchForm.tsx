/* eslint-disable react/prop-types */
import SearchAreaFormTop from './searchAreaFormTop';
import SearchAreaFormData from './searchAreaFormData';
import SearchButton from './searchButton';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { initialStateType } from '../../../store';
import React from 'react';
const SearchForm = () => {
  const useTypedSelector: TypedUseSelectorHook<initialStateType> = useSelector;
  const hoverInput: boolean = useTypedSelector((state) => state.hoverInput);
  const focusRightNow: boolean = useTypedSelector(
    (state) => state.focusRightNow
  );
  const inputOrNot: boolean = useTypedSelector((state) => state.inputOrNot);
  const searchFrameElem = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleSearchClick = (event) => {
      if (searchFrameElem.current.contains(event.target)) {
        dispatch({ type: 'CHANGE_FOCUS_RIGHT_NOW_TO_TRUE' });
      } else {
        dispatch({ type: 'CHANGE_INPUT_OR_NOT_TO_FALSE' });
        dispatch({ type: 'CHANGE_FOCUS_RIGHT_NOW_TO_FALSE' });
        dispatch({ type: 'CHANGE_HOVER_INPUT_TO_FALSE' });
      }
    };
    document.addEventListener('mousedown', handleSearchClick);
    return () => {
      document.removeEventListener('mousedown', handleSearchClick);
    };
  }, []);
  return (
    <div
      ref={searchFrameElem}
      className={hoverInput ? 'formItem formBackground' : 'formItem'}
      onMouseLeave={() => {
        if (!focusRightNow) {
          dispatch({ type: 'CHANGE_HOVER_INPUT_TO_FALSE' });
        }
      }}
      onMouseEnter={() => {
        if (!focusRightNow) {
          dispatch({ type: 'CHANGE_HOVER_INPUT_TO_TRUE' });
        }
      }}
    >
      <SearchAreaFormTop />
      <SearchAreaFormData />
      {inputOrNot ? <SearchButton /> : null}
      {inputOrNot ? (
        <div className="searchBottom">举报不当的联想查询</div>
      ) : null}
    </div>
  );
};
export default SearchForm;
