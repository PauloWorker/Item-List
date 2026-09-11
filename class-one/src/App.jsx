import React from 'react'
import './App.css'
import Menu from './components/Menu'
import Card from './components/Card'
import Student from './components/Props'

function App() {
  
  return (
    <>
      <Student 
        image={"https://via.placeholder.com/150"}
        name={"John Doe"}
        bio={"John is a software engineer with 5 years of experience."}
      />

    </>
  )
}

export default App
