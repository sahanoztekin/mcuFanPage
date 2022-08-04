import { useEffect, useState } from 'react';
import Style from "./InfoHeader.module.scss"

const Detail = ({ data, setSelect, setHideDetail, hideDetail, select }) => {



  const selectHandler = (e) => {
    setSelect(e.target.value)
    setHideDetail(true)
  }


  const heroNames = data?.members?.map(member => <option value={member.name} key={member.id}>{member.heroName}</option>)
  const heroInfo = data?.members?.find(member => member?.heroName === select)?.fullName
 

  const getFounder = data?.founder?.map(f => <li key={f.id}>{f.name}</li>)

  const selectStyleObj = {
    position: "absolute",
    left: "60px",
    height: "60px",
    background:"#333",
  }

  return (
    <div>
      <div className={Style.info}>
        {hideDetail ? <h3>{select}</h3> : data?.comics == "Villains" && <h3>INFO</h3> || data?.comics == "Marvel" && <h3 className={Style.seleted}>29 <span>Movies</span></h3> || getFounder && <h3>Members</h3>}
      </div>
            
        {/* <ul> */}
          {data?.comics == "Marvel" && <p className={Style.detailHero}>The cinematic universe was first presented in 2008 with Iron Man and reached 29 films in 14 years.</p> || <select style={hideDetail ? selectStyleObj : { padding: "0" }} onChange={selectHandler}>
            <option> Choose a Member!</option>
            {heroNames}
          </select>}

        {/* </ul> */}


      
      <div>
        {/* BURASI INFO */}
        <p className={Style.heroInfo}>{heroInfo}</p>
      </div>
    </div>
  )
}

export default Detail




{/* <h3> 29 <span>Movie</span> </h3> */ }