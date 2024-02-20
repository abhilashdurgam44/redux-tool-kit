
import { useSelector } from 'react-redux'
import './App.css'

function App() {

  const count=useSelector((state)=>state.counter)
 

  return (
    <>
       <h1>this is a website:{count}</h1>
    </>
  )
}

export default App
