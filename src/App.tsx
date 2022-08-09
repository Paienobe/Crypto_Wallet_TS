import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getCoins } from './features/coinlist/coinListSlice'
import Home from './pages/Home'

function App() {
  const dispatch = useDispatch()
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
