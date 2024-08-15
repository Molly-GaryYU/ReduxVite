/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
// 输入框检索内容
function SearchAreaFormData() {
    const inputOrNot=useSelector(state=>state.inputOrNot);
    const [searchData,setSearchData]=useState([]);
    useEffect( ()=>{
      ( async ()=>{
            const module= await import('../staticData/data.jsx');
            const data=module.default;
            setSearchData(data);
        })();
        return 
    },[])
    console.log('searchData',searchData)
    return (
        <>
            <div
                id="search--area--line"
                className={
                    inputOrNot
                        ? 'search--area--line'
                        : 'search--area--line display--none'
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
                            'search--area__form--data--row--margin change search--area__form--data--row'
                        let nameSpan
                        let introduceSpan
                        if (index === 0) {
                            containerClass =
                                'search--area__form--data--row--first--row change search--area__form--data--row'
                        }
                        // 没图片有作者
                        if (item.introduceOrNot) {
                            if (item.img) {
                                nameSpan = 'change'
                                introduceSpan =
                                    'search--area__form--data--row__author change'
                            } else {
                                    nameSpan =
                                    'search--area__form--data--row__span__none-img change'
                                introduceSpan =
                                    'search--area__form--data--row__span__none-img search--area__form--data--row__author change'
                            }
                            return (
                                <div className={containerClass} key={index}>
                                    {item.imgComponent}
                                    <div className="search--area__form--data--row__div change">
                                        <span className={nameSpan}>
                                            {item.name}
                                        </span>
                                        <span className={introduceSpan}>
                                            {item.introduce}
                                        </span>
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <div className={containerClass}>
                                {item.imgComponent}
                                <div className="search--area__form--data--row__div change">
                                    <span className="search--area__form--data--row__span">
                                        {item.name}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                    : null}
            </div>
        </>
    )
}


export default SearchAreaFormData
