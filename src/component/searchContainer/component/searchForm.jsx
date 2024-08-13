/* eslint-disable react/prop-types */
import SearchAreaFormTop from  './searchAreaFormTop'
import SearchAreaFormData from './searchAreaFormData'
import { useEffect, useRef, useState } from 'react'
const SearchForm = () => {
    const [hoverInput,setHoverInput]=useState(false);
    const [inputOrNot,setInputOrNot]=useState(false);
    const [focusRightNow,setFocusRightNow]=useState(false);
    const searchFrameElem=useRef(null);
    useEffect(()=>{
        const handleSearchClick=(event)=>{
          if(searchFrameElem.current.contains(event.target)){
            setFocusRightNow(true);
          }else{
            setInputOrNot(false);
            setFocusRightNow(false);
            setHoverInput(false);
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
                if (focusRightNow) {
                    console.log('MouseLeave do nothing')
                } else {
                    setHoverInput(false)
                }
            }}
            onMouseEnter={() => {
                if (focusRightNow) {
                    console.log('MouseEnter do nothing')
                } else {
                    setHoverInput(true)
                }
            }}
        >
            <SearchAreaFormTop
                hoverInput={hoverInput}
                setHoverInput={setHoverInput}
                setFocusRightNow={setFocusRightNow}
                setInputOrNot={setInputOrNot}
            ></SearchAreaFormTop>
            <SearchAreaFormData
                inputOrNot={inputOrNot}
            ></SearchAreaFormData>
        </div>
    )
}
export default SearchForm;