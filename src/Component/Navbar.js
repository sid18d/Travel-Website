import { Component } from "react";
import "./navbar.css";
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";


class Navbar extends Component{
    state={clicked:false};
    handleclick =()=>{
        this.setState({clicked:!this.state.clicked})
    }
  // Set state
  // Make Handleclick Function
  render(){
    return (
      <nav className="NavbarItems">
        <h1 className="Nav-bar-logo">Trippy</h1>

        <div className="menu-icons" onClick={this.handleclick}>
            <i className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i>
        </div>
        
        <ul className={this.state.clicked ? "nav-menu active":"nav-menu" }> 
        {Menuitems.map((item,index) =>{
            return(
                <li key={index}>
                <Link className={item.cname} to={item.url}> 
                    <i className={item.icons}> {item.title}
                    </i>
                </Link>

                </li>
            )
        })}
        <button>Sign Up</button>
            
        </ul>
      </nav>
    );  
  }
}

export default Navbar;
