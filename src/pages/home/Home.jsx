import "./home.css";
import { Link } from "react-router-dom";



export default function Home() {
  
  return (
    <div className="home">
        
       <div className="container">
      

<img className="homeimg" src="./Images/img1.jpg" alt=""/>
<div className="navbar" >

<ul>
<h1 className="logo">ECOMMERCE</h1>
  <li>
    <Link to="/Aboutus">Aboutus</Link>
    </li>
  <li>
    <Link to="/Products">Products</Link>
    </li>
  <li >
    <Link to="/">Home</Link>
   </li>
</ul>
</div>
<div>
  <img className="image2" src="./Images/img2.png" alt=""/>
  <img className="image3" src="./Images/img3.png" alt=""/>
  <img className="image4" src="./Images/img4.png" alt=""/>
 </div>
 <div className="cont2">
<img className="image5" src="./Images/img5.png" alt=""/>
<h1 className="texts">what a great day to <br></br>shop with us</h1>
<button className="btn">
  <Link to="./Products"></Link>
  shop
</button>
 </div>

       </div>
  
   
    </div>
    
  )
}
