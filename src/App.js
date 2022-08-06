import { useEffect, useState } from 'react';
import { FaEthereum } from 'react-icons/fa';
import Style from './App.module.scss';
import Center from './components/Center/Center';
import Sidebar from './components/Sidebar/Sidebar';
import {Route, Routes} from 'react-router-dom'

function App() {

   return (


      <div className={Style.container}>
<Routes>
   <Route path='/' element={ <Sidebar />} />
</Routes>
      </div>

   );
}

export default App;
