import { useEffect, useState } from 'react';
import { FaEthereum } from 'react-icons/fa';
import Style from './App.module.scss';
import Center from './components/Center/Center';
import Sidebar from './components/Sidebar/Sidebar';
import {Route, Routes} from 'react-router-dom'

function App() {


   // const [data, setData] = useState()
   // const [order, setOrder] = useState(0)

   // const getData = async () => {
   //    const result = await fetch("https://private-d1015c-marvelapi29.apiary-mock.com/marvelchar").then(res => res.json()).then(data => data)
   //    const filteredResult = result.filter(item => item.comics)
   //    setData(filteredResult)
   // }


   // const nextHandler = () => {

   //    setOrder(prevState => {
   //       if (prevState < data.length - 1) {
   //          return prevState + 1
   //       }
   //       return 0;
   //    })
   //    console.log(data[order])
   // }


   // useEffect(() => {
   //    getData()
   // }, [])



   return (


      <div className={Style.container}>
<Routes>
   <Route path='/' element={ <Sidebar />} />
</Routes>
         {/* <Center /> */}
      </div>

   );
}

export default App;



//  const [drop, setDrop] = useState("")


//  const data = [
   //    {
   //       "id": 1,
   //       "name": "ali"
   //    },
   //    {
   //       "id": 2,
   //       "name": "güney"
   //    },
   //    {
   //       "id": 3,
   //       "name": "şahan"
   //    },
   //    {
   //       "id": 4,
   //       "name": "utkan"
   //    },
   //    {
   //       "id": 5,
   //       "name": "mahmut"
   //    },
   //    {
   //       "id": 6,
   //       "name": "ahmwet"
   //    }
   // ]


//    <div className="App">
//    <div>
//       <h3 className='select' onClick={() => setDrop(!drop)}>More..</h3>
//       <div className='guney'>{drop && data.map(deneme => <div className='option'>{deneme.name} </div>)}</div>
//    </div>
// </div> 