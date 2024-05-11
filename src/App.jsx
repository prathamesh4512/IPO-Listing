import { useState } from 'react'
import './App.css';
import IpoListing from './module/IPOListing';

function App() {
  const [count, setCount] = useState(0)

  return (
<IpoListing/>
  )
}

export default App
