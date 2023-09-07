import './App.css'
import {useRoutes} from 'react-router'
import Opening from './pages/Opening'
import Register from './pages/Register'
import Login from './pages/Login'
import Listuser from './pages/Listuser'
import Userdetail from './pages/Userdetail'
import ProtectedRoute from './routes/ProtectedRoutes'

const routes = [
  { path : "/", element : <Opening/>},
  { path : "/register", element : <Register/>},
  { path : "/login", element : <Login/>},
  { path : "/listuser", element : (<ProtectedRoute><Listuser/></ProtectedRoute>)},
  { path : "/userdetail", element : (<ProtectedRoute><Userdetail/></ProtectedRoute>)}
]



function App() {
  const element = useRoutes(routes);

  return element;
}

export default App
