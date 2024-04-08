import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomPdfViewer from './components/CustomPdfViewer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <CustomPdfViewer/> 
    </>
  )
}

export default App
