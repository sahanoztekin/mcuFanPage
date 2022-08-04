import React from 'react'
import Style from "./Info.module.scss"

function Info() {
  return (
    <>
    <p className={Style.detailParagraph} style={{zIndex:"1"}}>The cinematic universe was first presented
      in 2008 with Iron Man. Reached 29 films in 14 years.
    </p>
</>
  )
}

export default Info