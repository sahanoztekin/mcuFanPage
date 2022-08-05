import React from 'react'
import Style from "./Detail.module.scss"
function Detail({ data, select, hideDetail }) {
 

  const onClickHero = () => {
   
   console.log(data?.members?.find((equip) => equip.heroName === select)?.equipment?.map((el,index) => el?.src))
  
   
  }


  // console.log("DETAIL",select)
  const heroInfo = data?.members?.find(equip => equip.heroName === select)?.equipment?.map(el => <li onClick={onClickHero}>{el.name}</li>)
  const getFounder = data?.founder?.map(f => <li key={f.id}>{f.name}</li>)
  // const getFounderImg = data?.founder?.src.map(f => <li key={f.id}>{f.src}</li>)

  const getFounderImg = data?.founder?.map(el => el?.src)

  // console.log(data.comics)

  // const selectHandler = (e) => {
  //   setSelect(e.target.value)
  // }
 


  return (
    <div >
      <div className={Style.detail}>
        {hideDetail ? <h3>Specialities</h3> : data?.comics == "Villains" && <h3>INFO</h3> || data?.comics == "Marvel" && <h3>4 <span>Team</span></h3> || getFounder && <h3>Founder</h3>}

      </div>

      {hideDetail ? <ul> {heroInfo} </ul> : (<ul className={Style.detailImg}>

        {data?.comics == "Villains" && <p>Villains from the Marvel comic book universe. Some of these villains are restricted to one series.</p> || data?.comics == "Marvel" && <ul className={Style.marvelChars}><li>Avengers</li><li>Guardians Of The Galaxy</li><li>X-men</li><li>Eternals</li></ul> || getFounder}
        {data?.comics == "Villains" && "" || data?.comics == "Marvel" && "" || <img src={getFounderImg} alt="" />}
      </ul>)}



    </div>
  )
}

export default Detail