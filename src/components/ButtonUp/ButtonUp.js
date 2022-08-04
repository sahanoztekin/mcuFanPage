import React,{useState, useEffect, useContext} from 'react'
import Style from "./ButtonUp.module.scss"
import { FaAngleUp } from 'react-icons/fa';

function ButtonUp() {



  // const [data, setData] = useState()
  // const [order, setOrder] = useState(0)

  // const getData = async () => {
  //    const result = await fetch("https://private-d1015c-marvelapi29.apiary-mock.com/marvelchar").then(res => res.json()).then(data => data)
  //    const filteredResult = result.filter(item => item.comics)
  //    setData(filteredResult)
  // }


  // const nextHandler = () => {

  //    setOrder(prevState => {
  //       if (prevState < data.length - 1) {
  //          return prevState + 1
  //       }
  //       return 0;
  //    })
    
  // }


  // useEffect(() => {
  //    getData()
  // }, [])









  return (
    <div>
        {/* <button onClick={nextHandler}><FaAngleUp size="50"/></button> */}
    </div>
  )
}

export default ButtonUp