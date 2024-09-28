import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  
  const [records, setRecords] = useState([]);
  
  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => setRecords(records => data))
  },[])

  return (
    <>
      <Home api={records}/>
    </>
  )
}

export default App
