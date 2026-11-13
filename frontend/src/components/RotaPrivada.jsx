import { Navigate, Outlet } from 'react-router-dom'
import Menu from './Menu.jsx'
 

function RotaPrivada() {
  const token = localStorage.getItem('token')
 
  if (!token) {
    return <Navigate to="/login" />
  }
 
  return <Outlet />
}

export default RotaPrivada