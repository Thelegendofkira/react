import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'

function App() {
  const [home, sethome] = useState(true);

  return (
    <div style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')",
      height:"100vh",
      backgroundSize:"cover",
    }}>

   <Header>pet adoption website</Header>


    </div>
  )
}

export default App
