/* eslint-disable react/prop-types */
import SearchAreaFormTop from  './searchAreaFormTop'
import SearchAreaFormData from './searchAreaFormData'
import SearchButton from'./searchButton.jsx'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const SearchForm = () => {
    const hoverInput =useSelector(state => state.hoverInput)
    const focusRightNow=useSelector(state=>state.focusRightNow)
    const inputOrNot=useSelector(state=>state.inputOrNot);
    const searchFrameElem=useRef(null);
    const dispatch=useDispatch();
    useEffect(()=>{
        const handleSearchClick=(event)=>{
          if(searchFrameElem.current.contains(event.target)){
            dispatch({type:'CHANGE_FOCUS_RIGHT_NOW_TO_TRUE'})
          }else{
            dispatch({type:'CHANGE_INPUT_OR_NOT_TO_FALSE'})
            dispatch({type:'CHANGE_FOCUS_RIGHT_NOW_TO_FALSE'})
            dispatch({type:'CHANGE_HOVER_INPUT_TO_FALSE'})
        }
    }
        document.addEventListener('mousedown',handleSearchClick);
        return ()=>{document.removeEventListener('mousedown',handleSearchClick);}
    },[]);
    return (
          <div
            ref={searchFrameElem}
            id="serch--frame"
            className={
                hoverInput
                    ? 'search--area__form search--area__form--background border--none'
                    : 'search--area__form'
            }
            onMouseLeave={() => {
                if (!focusRightNow){
                    dispatch({type:'CHANGE_HOVER_INPUT_TO_FALSE'})
                }
            }}
            onMouseEnter={() => {
                if (!focusRightNow) {
                    dispatch({type:'CHANGE_HOVER_INPUT_TO_TRUE'})
                }
            }}
        >
            <SearchAreaFormTop/>
            <SearchAreaFormData/>
             {inputOrNot?<SearchButton/>:null}
             {inputOrNot?<div className='search--area__form--data--bottom'>举报不当的联想查询</div>:null}
        </div>
    )
}
export default SearchForm;