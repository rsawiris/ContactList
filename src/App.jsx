import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useLocation, Routes, Route } from 'react-router-dom'
import Users from "./Components/Users"
import SingleUser from "./Components/Singleuser"
import Homepage from "./Components/Homepage"


function App() {
  const [users, setUsers] = useState([])
  
    useEffect(() => {
      const fetchUsers = async () => {
        const {data} = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
        console.log(data)
        setUsers(data)
      }
      fetchUsers()
    }, [])

  return (
    <>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/users'> Users - {users.length}</Link>
        </nav>
        
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/users' element={<Users users={users}/>}/>
          <Route path='/users/:id' element={<SingleUser users={users} />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
