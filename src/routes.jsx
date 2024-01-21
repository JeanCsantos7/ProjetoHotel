
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Destinos from './components/Destinos'
import Contato from './components/Contato'
import Sobre from './components/Sobre'
import Home from "./components/Home"

export default function Rotas()
{
 return(
    <BrowserRouter>
     <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/Destinos" element={<Destinos/>}></Route>
      <Route path="/Contato" element={<Contato/>}></Route>
      <Route path="/Sobre" element={<Sobre/>}></Route>
 

     </Routes>
    
    </BrowserRouter>
 )
    
}