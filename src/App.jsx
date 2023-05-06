import { useState, useEffect } from 'react';
import './App.css';
import Landing from './pages/landing';
import Loading from './components/loading/loading';

function App() {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => setloading(false), 2000)
  }, [])

  return loading === false? <Landing/> :  <Loading/>
}

export default App;