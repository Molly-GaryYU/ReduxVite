
import { useEffect, useState ,useRef } from 'react'
import './navigation.css'
import ninePointImg from '../../img/img-google/ninePoint.png'

//参数类型的声明，结合typescript再写吧我觉得
// eslint-disable-next-line react/prop-types 
export default function NavContent() {
  // eslint-disable-next-line no-unused-vars
  const [serverUrl, setServerUrl] = useState(
    'http://localhost:8080/pages/back/goods/getGoods'
  )
  const [dataResult, setDataResult] = useState([])
  const ninePoint = useRef(null)
  const dialog = useRef(null) 
  const [ninePointClickOrNot, setNinePointClickOrNot] = useState(false)
  //请求数据
  useEffect(()=>{
    const handleNinePointClick=(event)=>{
      if(ninePoint.current.contains(event.target)){
        setNinePointClickOrNot(ninePointClickOrNot=>!ninePointClickOrNot );
      }
      else if(dialog.current.contains(event.target)){
        console.log("dialog内点击,不关闭")
      }
      else{
        console.log("点击与抽屉无关，关闭")
        setNinePointClickOrNot(false);
      }
    }
    document.addEventListener('click',handleNinePointClick)
    return ()=>{document.removeEventListener('click',handleNinePointClick)}
  },[])
  //文档流监听关闭dialog
  useEffect(() => {
    fetch('http://localhost:8080/pages/back/goods/getGoods')
      .then((result) => {
        setDataResult({ result })
        console.log('fetch in', dataResult)
      })
      .catch(() => {
        import('./staticData/data.jsx').then((data)=>{
           const moreData= data.default;
           setDataResult(moreData)
        }).catch();
       // then()获取的数据无法在then外请求
      })
  }, [serverUrl])

  return (
    <nav className="navigation__nav">
      <a className="navigation__nav--img" href="/#" alt="">
        图片
      </a>
      <div
        className="navigation__nav--more "
        id="nine-point"
        ref={ninePoint}
      >
        <img
          className="navigation__nav--more__img"
          src={ninePointImg}
          alt=""
        />
      </div>
      <div
        ref={dialog}
        id="navigation__nav__dialog"
        className="navigation__nav__dialog"
        style={{ display: ninePointClickOrNot ? 'block' : 'none' }}
      >
        <div
          id="navigation__nav__dialog--display"
          className="navigation__nav__dialog--display"
        >
          {ninePointClickOrNot ? dataResultDisplay(dataResult) : null}
        </div>
      </div>
      <a className="navigation__nav--login__a navigation__nav--login">
        登录
      </a>
    </nav>
  )
}
const dataResultDisplay = (dataResult) => {
  return dataResult.map((itemBlock, index) => {
    return (
      <div className="navigation__nav__dialog--display--type" key={index}>
        <div className="navigation__nav__dialog--display--type--child">
          {itemBlock.map(({ name, imgComponent, id }) => {
            return (
              <a
                className="navigation__nav__dialog--display--type--box"
                href="/#"
                key={id}
              >
                <div className="navigation__nav__dialog--display--type--box__div">
                  {imgComponent}
                </div>
                <span> {name}</span>
              </a>
            )
          })}
        </div>
      </div>
    )
  })
}


