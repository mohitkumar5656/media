import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import Home from "./Pages/Home"
const App = ()=>{
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
export default App