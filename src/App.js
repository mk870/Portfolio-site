import { BrowserRouter,Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { Globalstyles} from "./Components/Globalstyles";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Menu/Navbar";
import Resume from "./Components/PDF/Resume";

function App() {
  return (
    <BrowserRouter>
      <Globalstyles/>
      <Navbar/>
      <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/resume" element={<Resume/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App;
