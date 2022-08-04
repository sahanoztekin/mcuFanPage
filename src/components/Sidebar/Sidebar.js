import React from 'react'
import Style from "./Sidebar.module.scss"
import Select from '../Select/Select.js'
// import ButtonDown from '../ButtonDown/ButtonDown'
// import ButtonUp from '../ButtonUp/ButtonUp'


function Sidebar() {
  return (
    <div className={Style.sidebar}>
   <Select/>

   {/* <ButtonDown/>       
 <ButtonUp /> */}



    </div>
  )
}

export default Sidebar