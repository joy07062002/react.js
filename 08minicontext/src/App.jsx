import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 

  return (
    <UserContextProvider>
      <h3>Joysha</h3>
      <Profile/>
      <Login/>
    </UserContextProvider>
  )
}

export default App
