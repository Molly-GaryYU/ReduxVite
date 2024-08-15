/* eslint-disable react/prop-types */
import searchImg from'../../../img/img-google/search.png'
import deleteImg from'../../../img/img-google/delete.png'
import maiKeImg from '../../../img/img-google/maike.png'
import cameraImg from'../../../img/img-google/picture.png'
import hoverMaiKeImg from '../../../img/img-google/hoverMaike.png'
import hoverCameraImg from'../../../img/img-google/hoverPicture.png'
import hoverSearchImg from'../../../img/img-google/hoverSearch.png'
import { useDispatch,useSelector} from 'react-redux'
// 输入框
function SearchAreaFormTop() {
    const hoverInput =useSelector(state=>state.hoverInput)
    const dispatch=useDispatch();
    const handelInputValue=(event)=>{
        if(event.target.value){
            console.log("input非空")
            dispatch({type:'CHANGE_INPUT_OR_NOT_TO_TRUE'})
        }else{
            dispatch({type:'CHANGE_INPUT_OR_NOT_TO_FALSE'})
        }
    }
    return (
        <div className="search--area__form--top">
            <div className="search--area__form--top__div">
                <div className="search--area__form--left ">
                    <img
                        className="search--area__form--left__img"
                        src={hoverInput ? hoverSearchImg : searchImg}
                        alt=""
                    />
                    <input 
                        className={
                            hoverInput
                                ? 'search--area__form__input search--area__form--background '
                                : 'search--area__form__input'
                        }
                        onFocus={() => {
                            dispatch({type:'CHANGE_FOCUS_RIGHT_NOW_TO_TRUE'})
                            dispatch({type:'CHANGE_HOVER_INPUT_TO_TRUE'})
                        }}
                        onChange={handelInputValue}
                    />
                </div>
                <div className="search--area__form--right">
                    <img
                        className="search--area__form--right--hidden search--area__form--right--hide"
                        src={deleteImg}
                        alt=""
                    />
                    <span
                        className="search--area__form--right--line search--area__form--right--hide"
                        id="search--area__form--right--line"
                    ></span>
                    <img
                        className={
                            hoverInput
                                ? 'search--button--searchimg'
                                : 'search--area__form--right--maike'
                        }
                        src={hoverInput ? hoverMaiKeImg : maiKeImg}
                        alt=""
                    />
                    <img
                        className={
                            hoverInput
                                ? 'search--area__form--right--picture search--area__form--right--picture--hover'
                                : 'search--area__form--right--picture'
                        }
                        src={hoverInput ? hoverCameraImg : cameraImg}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
export default SearchAreaFormTop