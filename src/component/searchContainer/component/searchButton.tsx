import React from 'react';
import { useEffect, useRef, useState } from 'react';

const SearchButton = () => {
  const [lockByGoogle, setLockByGoogle] = useState(false);
  const [lockByLucky, setLockByLucky] = useState(false);
  const [hoverGoogleButton, setHoverGoogleButton] = useState(false);
  const [hoverLuckyButton, setHoverLuckyButton] = useState(false);
  const googleButton = useRef(null);
  const luckyButton = useRef(null);
  useEffect(() => {
    const handelGoogleButton = (event) => {
      if (googleButton.current.contains(event.target)) {
        setLockByGoogle(true);
        setHoverGoogleButton(true);
        console.log('googleButton点击');
      } else {
        setLockByGoogle(false);
        setHoverGoogleButton(false);
        console.log('googleButton关闭');
      }
    };
    const handelLockByLucky = (event) => {
      if (luckyButton.current.contains(event.target)) {
        setLockByLucky(true);
        setHoverLuckyButton(true);
      } else {
        setLockByLucky(false);
        setHoverLuckyButton(false);
      }
    };
    document.addEventListener('click', handelGoogleButton);
    document.addEventListener('click', handelLockByLucky);
    return () => {
      document.removeEventListener('click', handelGoogleButton);
      document.removeEventListener('click', handelLockByLucky);
    };
  }, []);
  return (
    <div className="search--button">
      <button
        ref={googleButton}
        className={
          hoverGoogleButton
            ? 'button--background search--button__button search--button--search button-border-hover'
            : 'button--background search--button__button search--button--search button-border'
        }
        onMouseLeave={() => {
          if (!lockByGoogle) {
            console.log('googleButton hover');
            setHoverGoogleButton(false);
          }
        }}
        onMouseEnter={() => {
          if (!lockByGoogle) {
            console.log('googleButton out');
            setHoverGoogleButton(true);
          }
        }}
      >
        Google 搜索
      </button>
      <button
        ref={luckyButton}
        onMouseEnter={() => {
          if (!lockByLucky) console.log('lockByLucky hover');
          setHoverLuckyButton(true);
        }}
        onMouseLeave={() => {
          console.log('lockByLucky out');
          if (!lockByLucky) setHoverLuckyButton(false);
        }}
        className={
          hoverLuckyButton
            ? 'button--background search--button__button search--button--lucky button-border-hover'
            : 'button--background search--button__button search--button--lucky button-border'
        }
      >
        手气不错
      </button>
    </div>
  );
};
export default SearchButton;
