import { BrowserRouter} from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import { Globalstyles} from "./Components/Globalstyles";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Menu/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Globalstyles/>
      <Navbar/>
      <Home/>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App;
