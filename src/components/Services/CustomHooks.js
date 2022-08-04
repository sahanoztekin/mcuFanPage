import {useState} from 'react'


const CustomHooks = () => {

    const [heroes, setHeroes] = useState([])

    const fetchData = async(url) => {
        const response = await fetch(url).then(response => response.json())
        setHeroes(response)
     }



  return {
heroes,
fetchData
  }
}

export default CustomHooks

