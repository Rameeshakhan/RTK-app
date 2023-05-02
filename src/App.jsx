import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavigationBar from "./components/Navbar"
import UserList from "./components/UserList"
import AddUser from "./components/AddUser"
import EditUser from "./components/EditUser"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={ <UserList/>} />
          <Route path="/add" element={<AddUser/>} />
          <Route path="/edit:id" element={<EditUser/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
