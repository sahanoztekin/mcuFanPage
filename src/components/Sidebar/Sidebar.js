import React from 'react'
import Style from "./Sidebar.module.scss"
import Select from '../Select/Select.js'



function Sidebar() {
  return (
    <div className={Style.sidebar}>
   <Select/>
    </div>
  )
}

export default Sidebar