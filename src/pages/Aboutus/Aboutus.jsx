import { Link } from "react-router-dom"
import "./aboutus.css"



export default function Aboutus() {
  return (
    <div className="cont3">
        <h1 className="aboutus">
            About Us
        </h1>
        <div className="navbar" >
<ul>
 
  <li>
    <Link to="/Aboutus"></Link>
    About us</li>
  <li>
  <Link to="/Products"></Link>
    Products</li>
  <li >
  <Link to="/"></Link>
    Home</li>
</ul>
</div>
        <p className="info">This design for Rook keeps things super simple and <br></br>very sharp by using a strict color palette and clean shapes. Their signature gold shade is used<br></br> throughout the design in a simple and effective way, by carrying it<br></br> from the logo, to the imagery, and<br></br> through to the type.<br></br>

Consider running a monochromatic filter over some of you<br></br>r photographs just as Rook have done<br></br> here for their team member portraits.<br></br> This will give you a tighter hold on the colors used<br></br> in your About Us page and help to keep your palette small<br></br> and strong, giving you a chance to really make use of <br></br>your signature brand colors.</p>
        <div className="socilas">
        <button className="media"><i class="fa fa-facebook"></i></button>
        <button className="media"><i class="fa fa-twitter"></i></button>
        <button className="media"><i class="fa fa-instagram"></i></button>
        <button className="media"><i class="fa fa-pinterest"></i></button>
        </div>
        <footer>
         <p>  created by <span className="name">MONICA TESS</span></p>
             <p>copyright @<a className="email" href="mailto:tessmonica1372@gmail.com">email me</a></p>
        </footer>
        </div>
  )
}
