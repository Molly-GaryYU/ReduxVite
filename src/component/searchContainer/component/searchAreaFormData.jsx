/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import searchImg1 from'../../../img/img-google/serchImg1.png'
import searchImg2 from'../../../img/img-google/searchImg2.png'
import hoverSearchImg from'../../../img/img-google/hoverSearch.png'
// 输入框检索内容
function SearchAreaFormData({ inputOrNot }) {
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
const searchData = [
    {
        name: '啊~',
        img: false,
        imgComponent: (
            <img
                src={hoverSearchImg}
                className="search--area__form--data--row__nothing change"
                alt=""
            />
        ),
        introduce: '',
        introduceOrNot: false,
    },
    {
        name: '啊吗粽',
        img: false,
        imgComponent: (
            <img
                src={hoverSearchImg}
                className="search--area__form--data--row__nothing change"
                alt=""
            />
        ),
        introduce: '音乐家',
        introduceOrNot: true,
    },
    {
        name: '啊朋友再见',
        img: true,
        imgComponent: (
            <img
                src={searchImg1}
                className="search--area__form--data--row__img change"
                alt=""
            />
        ),
        introduce: '歌曲',
        introduceOrNot: true,
    },
    {
        name: '啊 meaning',
        img: false,
        imgComponent: (
            <img
                src={hoverSearchImg}
                className="search--area__form--data--row__nothing change"
                alt=""
            />
        ),
        introduce: '',
        introduceOrNot: false,
    },
    {
        name: '啊!海军',
        img: true,
        imgComponent: (
            <img
                src={searchImg2}
                className="search--area__form--data--row__img change"
                alt=""
            />
        ),
        introduce: '1969年的电影',
        introduceOrNot: true,
    },
    {
        name: '啊 表情包',
        img: false,
        imgComponent: (
            <img
                src={hoverSearchImg}
                className="search--area__form--data--row__nothing change"
                alt=""
            />
        ),
        introduce: '',
        introduceOrNot: false,
    },
    {
        name: '啊哈加速器',
        img: false,
        imgComponent: (
            <img
                src={hoverSearchImg}
                className="search--area__form--data--row__nothing change"
                alt=""
            />
        ),
        introduce: '',
        introduceOrNot: false,
    },
    {
        name: '啊哈',
        img: false,
        imgComponent: (
            <img
                src={hoverSearchImg}
                className="search--area__form--data--row__nothing change"
                alt=""
            />
        ),
        introduce: '',
        introduceOrNot: false,
    },
    {
        name: '啊实打实',
        img: false,
        imgComponent: (
            <img
                src={hoverSearchImg}
                className="search--area__form--data--row__nothing change"
                alt=""
            />
        ),
        introduce: '',
        introduceOrNot: false,
    },
    {
        name: '啊的变调',
        img: false,
        imgComponent: (
            <img
                src={hoverSearchImg}
                className="search--area__form--data--row__nothing change"
                alt=""
            />
        ),
        introduce: '',
        introduceOrNot: false,
    },
]