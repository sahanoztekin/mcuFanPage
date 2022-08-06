import React, { useState, useEffect } from 'react'
import Style from "./Select.module.scss"
import Center from '../Center/Center';
import { FaAngleUp } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';

function Select() {


  const [data, setData] = useState([])
  const [order, setOrder] = useState(0)

  const getData = async () => {
    const result = await fetch("https://private-d1015c-marvelapi29.apiary-mock.com/marvelchar").then(res => res.json()).then(data => data)
    const filteredResult = result.filter(item => item.comics)
    setData(filteredResult)
  }

  useEffect(() => {
    getData()
  }, [])

  const nextHandler = () => {
    setOrder(prevState => {
      if (prevState < data.length - 1) {
        return prevState + 1
      }
      return 0;
    })
  }
  const backHandler = () => {
    setOrder(prevState => {
      if (prevState > 0) {
        return prevState - 1
      }
      return data.length - 1;
    })
  }


  const comicsFilter =  data[order]?.comics

  return (
    <>
    <div className={Style.select}>
      <h1 className={Style.title}>{comicsFilter}</h1>
      <div className={Style.line}></div>
      <div className={Style.next_prev}>
        <button><FaAngleUp size="50" onClick={nextHandler} /></button>
        <button><FaAngleDown size="50" onClick={backHandler} /></button>
      </div>
      
    </div>
    <Center data={data[order]}/>
    </>
  )
}

export default Select