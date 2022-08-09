import { ThunkAction } from '@reduxjs/toolkit'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getCoins } from './features/coinlist/coinListSlice'
import Home from './pages/Home'
import { useAppDispatch } from './store/store'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCoins())
  }, [])

  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
