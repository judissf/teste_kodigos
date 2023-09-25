import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'

export const RoutesMain = () => (
  <Routes>
    <Route path='/'  element={<Login />} />
    <Route path='/home'  element={<Home />} />
  </Routes>
)
