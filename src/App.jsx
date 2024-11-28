import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Feed from './components/Feed'
import Layout from './Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Feed category="" />} />
        <Route path='/business' element={<Feed category="business" />} />
      </Route>
    </Routes>
  )
}

export default App
