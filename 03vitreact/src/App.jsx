import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
      <h1 className='bg-green-300 text-black p-6 rounded-xl'>I Love You Barsha </h1>
      <Card username="joy" btn="click me"/>
      <Card username="sachin"/>
    </>
  )
}

export default App
