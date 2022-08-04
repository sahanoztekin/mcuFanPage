import React, { useEffect } from 'react'
import Style from "./Center.module.scss"
import InfoHeader from "../InfoHeader/InfoHeader"
import DetailHeader from '../DetailHeader/DetailHeader'
import Detail from '../Detail/Detail'
import Info from '../Info/Info'
import { useState } from 'react'

function Center({ data }) {

  const [select, setSelect] = useState()
  const [hideDetail, setHideDetail] = useState(false)

  const heroSrc = data?.members?.find(heroImg => heroImg.heroName === select)?.src


  return (
    <div className={Style.center_container} style={hideDetail ? { backgroundImage: `url(${heroSrc})` } : { backgroundImage: `url(${data?.src})` }}>
      <div className={Style.center} >
        <div className={Style.Info}> <InfoHeader data={data} setSelect={setSelect} hideDetail={hideDetail} setHideDetail={setHideDetail} select={select} /> </div>
        <div className={Style.Detail}> <Detail data={data} select={select} hideDetail={hideDetail} /></div>
      </div>
    </div>
  )
}

export default Center