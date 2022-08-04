import React,{useEffect, useState} from 'react'
import Style from "./ButtonDown.module.scss"
import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';


function ButtonDown() {


  // const [data, setData] = useState()
  // const [order, setOrder] = useState(data?.length)

  // const getData = async () => {
  //    const result = await fetch("https://private-d1015c-marvelapi29.apiary-mock.com/marvelchar").then(res => res.json()).then(data => data)
  //    const filteredResult = result.filter(item => item.comics)
  //    setData(filteredResult)
  // }


  // const prevHandler = () => {

  //    setOrder(prevState => {
  //       if (prevState <= data.length) {
  //          return prevState - 1
  //       }else if (prevState == 0){
  //         return data.length - 1;
  //       }
  //      else {
  //       console.log("qwe")
  //      }
  //    })
  //    console.log(data[order])
  // }

  // useEffect(() => {
  //    getData()
  // }, [])




  return (
    <div className={Style.btns}>

<button><FaAngleDown size="50"/></button>


    </div>
  )
}

export default ButtonDown