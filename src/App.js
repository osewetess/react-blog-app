import Home from "./pages/home/Home";
import Products from "./pages/Products/Products";
import Aboutus from "./pages/Aboutus/Aboutus";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
 
 <Router>
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route  path="/Products" element={<Products/>} />
    <Route  path="/Aboutus" element={<Aboutus/>} />
  </Routes>
 </Router>
  
   </>
  );
}

export default App;

