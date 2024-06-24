
import React from "react";
import logo from "../../assets/images/logo.png";
import "./style.css";

 class Navbar extends React.Component{
    render(){       
      return (
        <header>
            <nav id="navbar">
                <div className="nav-brand">
                    <img src={logo} alt="planetas" width={55} />
                    <h1>Space Flight News</h1>
                </div>
    
            <ul className="nav-list">
                <li>
                    <a href="/">Home</a>
                </li>
    
                <li>
                    <a href="/">Trending</a>
                </li>
                
                <li>
                    <a href="/">categories</a>
                </li>
    
                <li>
                 <a href="/">About us</a>
                </li>
            </ul>
        </nav>     
     </header>    
   );

 }

}

export default Navbar;