import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavigationBar from "./components/Navbar"
import UserList from "./components/UserList"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" component={<UserList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
