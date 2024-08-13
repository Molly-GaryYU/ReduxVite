import './component/footer/bottom.css'
import './css-google/googleHome.css'
import './component/searchContainer/search.css'
import './component/Navigation/navigation.css'
import FooterContainer from './component/footer/footerContainer.jsx'
import NavContent from './component/Navigation/navigation.jsx'
import SearchContent from './component/searchContainer/searchContent.jsx'

const App = () => {
   
   
    return (
        <div
            className="main-frame"
            id="main-frame"
            // onClick={(event) => {
            //     const serchFrameElemNode = serchFrameElem.current
            //     const ninePointNode = ninePoint.current
            //     const dialogNode = dialog.current
            //     console.log(event.target)
            //     if (serchFrameElemNode.contains(event.target)) {
            //         console.log('点击在搜索框内')
            //         setFoucsRightNow(true)
            //         setNinePointClikeOrNot(false)
            //     } else if (dialogNode.contains(event.target)) {
            //         console.log('点击在抽屉1')
            //         setFoucsRightNow(false)
            //         setNinePointClikeOrNot(!ninePointClikeOrNot)
            //         setInputOrNot(false)
            //     } else if (ninePointNode.contains(event.target)) {
            //         console.log('点击在抽屉按钮')
            //         setFoucsRightNow(false)
            //         setNinePointClikeOrNot(!ninePointClikeOrNot)
            //         setInputOrNot(false)
            //     } else {
            //         console.log('页面点击')
            //         setFoucsRightNow(false)
            //         setInputFocusOrHover(false)
            //         setNinePointClikeOrNot(false)
            //         setInputOrNot(false)
            //     }
            // }}
        >
            <div className="navigation">
                <NavContent
                />
            </div>
            <div className="search">
                <SearchContent/>
            </div>
            <FooterContainer />
        </div>
    )
}

export default App
