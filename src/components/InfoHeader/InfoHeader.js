import CustomHooks from '../Services/CustomHooks'
import { useEffect, useState } from 'react';
import Style from "./InfoHeader.module.scss"

const Detail = ({ data, setSelect, setHideDetail, hideDetail, select }) => {



  const selectHandler = (e) => {
    setSelect(e.target.value)
    setHideDetail(true)
  }


  const heroNames = data?.members?.map(member => <option value={member.name} key={member.id}>{member.heroName}</option>)
  const heroInfo = data?.members?.find(member => member?.heroName === select)?.fullName
  // const {heroes,  fetchData} = CustomHooks()

  // useEffect(() => {
  // fetchData("https://marvel-api-163ab-default-rtdb.firebaseio.com/.json")
  // },[])

  // const members = heroes.heroes?.Avengers[0].members.map(el => el.heroName)

  const getFounder = data?.founder?.map(f => <li key={f.id}>{f.name}</li>)

  const selectStyleObj = {
    position: "absolute",
    left: "60px"
  }

  return (
    <div>
      <div className={Style.info}>
        {hideDetail ? <h3>{select}</h3> : data?.comics == "Villains" && <h3>INFO</h3> || data?.comics == "Marvel" && <h3 className={Style.seleted}>29 <span>Movies</span></h3> || getFounder && <h3>Members</h3>}

        <ul>
          {data?.comics == "Marvel" && <p>First Presented in 2008..</p> || <select style={hideDetail ? selectStyleObj : { padding: "0" }} onChange={selectHandler}>
            <option> Choose a Member!</option>
            {heroNames}
          </select>}

        </ul>


      </div>
      <div>
        {/* BURASI INFO */}
        <p className={Style.heroInfo}>{heroInfo}</p>
      </div>
    </div>
  )
}

export default Detail




{/* <h3> 29 <span>Movie</span> </h3> */ }